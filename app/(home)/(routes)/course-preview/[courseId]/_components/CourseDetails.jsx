import { Book } from "lucide-react";
const CourseDetails = ({ courseDetail }) => {
  return (
    <div className="mt-5 p-5 rounded-lg border">
      <h2 className="text-[20px] font-medium">{courseDetail.name}</h2>
      <div className="flex gap-2 items-center mt-2">
        <Book className="h-6 w-6 text-purple-600 p-1" />
        <h2 className="text-[12px] text-gray-400">
          {courseDetail.totalChapters} Chapters
        </h2>
      </div>
      <p className="line-clamp-4 text-gray-500">{courseDetail.description}</p>
    </div>
  );
};
export default CourseDetails;
