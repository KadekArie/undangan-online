import { faDove } from "@fortawesome/free-solid-svg-icons/faDove";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CommentHeader({ count }: { count: number }) {
  return (
    <div className="border-b border-shadow-200 text-shadow-700 text-sm p-3 py-2 flex items-center gap-2">
      <FontAwesomeIcon icon={faDove} />
      <h1 className="font-bold">
        {count ? `${count} Ucapan` : "Belum ada ucapan"}
      </h1>
    </div>
  );
}
