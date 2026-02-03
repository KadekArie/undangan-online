import { useEffect, useRef, useState } from "react";
import { supabase } from "../../../supabaseClient";

export interface Comment {
  id: number;
  created_at: string;
  author: string;
  wishes: string;
  attendance: boolean;
}

export interface ResponseData {
  total_items: number;
  total_pages: number;
  current_page: number;
  data: Comment[];
}

export interface PostPayload {
  author: string;
  wishes: string;
  attendance: boolean;
}

export default function useComments(initialPage = 1, initialPageSize = 5) {
  const [data, setData] = useState<ResponseData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [pageSize, setPageSize] = useState<number>(initialPageSize);

  const currentPageRef = useRef(currentPage);
  const pageSizeRef = useRef(pageSize);
  const channelRef = useRef<any>(null);

  useEffect(() => {
    currentPageRef.current = currentPage;
  }, [currentPage]);

  useEffect(() => {
    pageSizeRef.current = pageSize;
  }, [pageSize]);

  async function fetchPage(
    page = currentPageRef.current,
    size = pageSizeRef.current,
  ) {
    setLoading(true);
    setError(null);
    try {
      const from = (page - 1) * size;
      const to = page * size - 1;

      const {
        data: rows,
        error: fetchError,
        count,
      } = await supabase
        .from("comments")
        .select("*", { count: "exact" })
        .order("created_at", { ascending: false })
        .range(from, to);

      if (fetchError) throw fetchError;

      const total_items = count ?? rows?.length ?? 0;
      const total_pages = Math.max(1, Math.ceil(total_items / size));

      setData({
        total_items,
        total_pages,
        current_page: page,
        data: (rows as Comment[]) ?? [],
      });

      setCurrentPage(page);
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching comments");
    } finally {
      setLoading(false);
    }
  }

  async function postComment(
    payload: PostPayload,
    callback?: (comment: Comment) => void,
  ) {
    if (
      !payload ||
      !payload.author ||
      !payload.wishes ||
      typeof payload.attendance !== "boolean"
    ) {
      throw new Error("Missing required fields: author, wishes, attendance");
    }

    setLoading(true);
    setError(null);

    try {
      const { data: inserted, error: insertError } = await supabase
        .from("comments")
        .insert({
          author: payload.author,
          wishes: payload.wishes,
          attendance: payload.attendance,
        })
        .select()
        .single();

      if (insertError) throw insertError;

      if (callback && inserted) callback(inserted as Comment);

      // Optimistically update for page 1
      if (currentPageRef.current === 1 && inserted) {
        setData((prev) => {
          if (!prev) {
            return {
              total_items: 1,
              total_pages: 1,
              current_page: 1,
              data: [inserted as Comment],
            };
          }

          const newData = [inserted as Comment, ...prev.data];
          const trimmed = newData.slice(0, pageSizeRef.current);

          return {
            ...prev,
            total_items: prev.total_items + 1,
            data: trimmed,
          };
        });
      } else if (inserted) {
        // if not on first page, just increment total
        setData((prev) =>
          prev ? { ...prev, total_items: prev.total_items + 1 } : prev,
        );
      }

      return inserted as Comment;
    } catch (err: any) {
      setError(err.message || "An error occurred while posting comment");
      throw err;
    } finally {
      setLoading(false);
    }
  }

  // initial fetch on mount and when page or size changes
  useEffect(() => {
    fetchPage(currentPage, pageSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, pageSize]);

  // subscribe once to realtime changes in comments
  useEffect(() => {
    const channel = supabase
      .channel("public:comments")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "comments" },
        (payload: any) => {
          const event =
            payload.eventType || payload.event || payload.type || "";
          const evt = String(event).toUpperCase();
          if (evt === "INSERT" || evt === "UPDATE" || evt === "DELETE") {
            // refetch current visible page
            fetchPage(currentPageRef.current, pageSizeRef.current);
          }
        },
      )
      .subscribe();

    channelRef.current = channel;

    return () => {
      try {
        channelRef.current?.unsubscribe?.();
      } catch (e) {
        // ignore
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function goToPage(page: number) {
    if (page < 1) page = 1;
    if (data && page > data.total_pages) page = data.total_pages;
    setCurrentPage(page);
  }

  function nextPage() {
    if (data && currentPage < data.total_pages) setCurrentPage((p) => p + 1);
  }

  function prevPage() {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  }

  return {
    data,
    loading,
    error,
    fetchPage,
    postComment,
    goToPage,
    nextPage,
    prevPage,
    setPageSize,
  };
}
