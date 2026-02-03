import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Comment } from "./hooks/Comments";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons/faXmarkCircle";
import { faClock } from "@fortawesome/free-regular-svg-icons/faClock";
import { timeAgoId } from "../../utils/timeAgoId";

export default function CommentEntry({ comment }: { comment: Comment }) {
  return (
    <li className="flex flex-col py-4 md:py-8 pb-6">
      <div className="flex flex-row gap-2">
        <h2 className="text-shadow-700 font-sm font-semibold">
          {comment.author}
        </h2>
        <AttendanceCard attend={comment.attendance} />
      </div>
      <span className="text-xs opacity-70">
        <FontAwesomeIcon icon={faClock} />{" "}
        {timeAgoId(comment.created_at ?? new Date().toISOString())}
      </span>
      <p className="mt-4 text-shadow-900 text-sm">{comment.wishes}</p>
    </li>
  );
}

function AttendanceCard({ attend }: { attend: boolean }) {
  const icon = attend ? faCircleCheck : faXmarkCircle;

  return (
    <div className="flex items-center bg-shadow-600 text-white rounded-sm p-1">
      <FontAwesomeIcon icon={icon} />
      <span className="ms-0.5 text-xs font-semibold">
        {attend ? "Hadir" : "Tidak hadir"}
      </span>
    </div>
  );
}
