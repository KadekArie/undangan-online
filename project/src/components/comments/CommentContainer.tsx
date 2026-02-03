import { useEffect, useMemo, useState } from "react";
import useComments from "./hooks/Comments";
import CommentHeader from "./CommentHeader";
import CommentEntry from "./CommentEntry";
import CommentForm from "./CommentForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons/faArrowLeftLong";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons/faArrowRightLong";

function buildPageItems(current: number, total: number, maxVisible = 5) {
  const items: Array<number | "ellipsis"> = [];
  if (total <= 1) return items;

  const visible = Math.max(3, maxVisible);

  // always show first
  items.push(1);

  if (total <= visible + 2) {
    for (let i = 2; i <= total; i++) items.push(i);
    return items;
  }

  const left = Math.max(2, current - Math.floor((visible - 1) / 2));
  const right = Math.min(total - 1, left + visible - 2);
  const adjustedLeft = Math.max(2, right - (visible - 2));

  if (adjustedLeft > 2) items.push("ellipsis");

  for (let i = adjustedLeft; i <= right; i++) items.push(i);

  if (right < total - 1) items.push("ellipsis");

  items.push(total);
  return items;
}

export default function CommentContainer() {
  const { data, loading, error, postComment, goToPage, nextPage, prevPage } =
    useComments();

  // responsive max pages to show
  const [maxVisible, setMaxVisible] = useState<number>(5);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 640) setMaxVisible(3);
      else if (w < 1024) setMaxVisible(5);
      else setMaxVisible(7);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pageItems = useMemo<Array<number | "ellipsis">>(() => {
    const total = data?.total_pages ?? 0;
    const current = data?.current_page ?? 0;
    return buildPageItems(current, total, maxVisible);
  }, [data?.total_pages, data?.current_page, maxVisible]);

  return (
    <div className={`w-full border rounded-xl bg-shadow-50 border-shadow-200`}>
      <CommentHeader count={data?.total_items ?? 0} />

      {/* Comment form component */}
      <CommentForm
        loading={loading}
        onSubmit={async (payload) => {
          await postComment(payload);
          goToPage(1);
        }}
      />

      {error && <div className="text-red-600 p-3">{error}</div>}

      {/* Comments list */}
      <ul className="*:border-t *:border-shadow-200 *:px-4 md:*:px-8 xl:*:px-24">
        {data?.data.map((comment) => (
          <CommentEntry comment={comment} key={comment.id} />
        ))}
      </ul>

      {/* Adaptive pagination controls */}
      <div className="flex items-center justify-center p-3 flex-wrap gap-2 border-t border-shadow-200">
        <button
          onClick={() => prevPage()}
          disabled={!data || data.current_page <= 1}
          className="px-3 py-1 cursor-pointer disabled:cursor-default disabled:opacity-40 not-disabled:hover:scale-110 transition-transform"
        >
          <span>
            <FontAwesomeIcon icon={faArrowLeftLong} className="pe-2" />
            <span className="hidden lg:inline">Previous</span>
          </span>
        </button>

        <div className="flex items-center gap-2 flex-wrap">
          {pageItems.length === 0 && <span className="text-sm">No pages</span>}
          {pageItems.map((it: number | "ellipsis", idx: number) =>
            it === "ellipsis" ? (
              <span key={`el-${idx}`} className="px-2">
                ...
              </span>
            ) : (
              <button
                key={`p-${it}`}
                onClick={() => goToPage(it)}
                aria-current={data?.current_page === it}
                className={`px-3 py-1 rounded border transition-colors ${data?.current_page === it ? "bg-shadow-700 text-white" : "hover:bg-shadow-100 cursor-pointer"}`}
              >
                {it}
              </button>
            ),
          )}
        </div>

        <button
          onClick={() => nextPage()}
          disabled={!data || data.current_page >= (data?.total_pages ?? 0)}
          className="px-3 py-1 cursor-pointer disabled:cursor-default disabled:opacity-40 not-disabled:hover:scale-110 transition-transform"
        >
          <span>
            <span className="hidden lg:inline">Next</span>
            <FontAwesomeIcon icon={faArrowRightLong} className="ps-2" />
          </span>
        </button>
      </div>
    </div>
  );
}
