import React, { useState } from "react";
import type { PostPayload } from "./hooks/Comments";

interface Props {
  onSubmit: (payload: PostPayload) => Promise<void>;
  loading?: boolean;
}

export default function CommentForm({ onSubmit, loading }: Props) {
  const [author, setAuthor] = useState("");
  const [wishes, setWishes] = useState("");
  const [attendance, setAttendance] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!author.trim()) return setError("Nama harus diisi");
    if (!wishes.trim()) return setError("Ucapan harus diisi");
    if (attendance !== "true" && attendance !== "false")
      return setError("Konfirmasi Kehadiran harus dipilih");

    try {
      await onSubmit({
        author: author.trim(),
        wishes: wishes.trim(),
        attendance: attendance === "true",
      });
      setAuthor("");
      setWishes("");
      setAttendance("");
    } catch (err: any) {
      setError(err?.message ?? "Gagal mengirim komentar");
    }
  }

  return (
    <form
      className="flex flex-col p-4 md:p-6 gap-4 md:gap-6 text-sm"
      onSubmit={handleSubmit}
    >
      <input
        id="author"
        name="author"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Nama"
        className="placeholder-opacity-70 invalid:opacity-70 p-2 outline outline-shadow-300 focus:outline-2 bg-white rounded-md"
      />

      <div className="flex flex-col items-end">
        <textarea
          id="wishes"
          name="wishes"
          value={wishes}
          onChange={(e) => {
            if (wishes.length < 500) setWishes(e.target.value);
          }}
          placeholder="Ucapan"
          className={`min-h-30 max-h-60 w-full placeholder-opacity-70 invalid:opacity-70 p-2 outline outline-shadow-300 focus:outline-2 bg-white rounded-md`}
        />
        <span className="self-end text-shadow-700">{500 - wishes.length}</span>
      </div>

      <select
        required
        value={attendance}
        onChange={(e) => setAttendance(e.target.value)}
        name="attendance"
        id="attendance"
        className="placeholder-opacity-70 invalid:opacity-70 p-2 outline outline-shadow-300 focus:outline-2 bg-white rounded-md"
      >
        <option value="" disabled hidden>
          Konfirmasi Kehadiran
        </option>
        <option value="true">Hadir</option>
        <option value="false">Tidak hadir</option>
      </select>

      {error && <div className="text-red-600">{error}</div>}

      <button
        disabled={loading}
        className="bg-shadow-700 text-white font-semibold self-start px-4 py-1 rounded-md"
      >
        {loading ? "Mengirim..." : "Kirim"}
      </button>
    </form>
  );
}
