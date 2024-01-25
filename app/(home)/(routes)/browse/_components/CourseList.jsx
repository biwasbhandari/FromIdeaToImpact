import { Book } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CourseList = ({ courses }) => {
  return (
    <div className="mt-5 grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {courses.map((course, index) => (
        <Link href={"/course-preview/" + course.id}>
          <div
            key={index}
            className="border rounded-lg p-3 cursor-pointer hover:border-purple-400"
          >
            <Image
              src={course.banner.url}
              alt={course.name}
              height={1000}
              width={500}
              priority
              className="rounded-lg"
            />
            <div>
              <h2 className="text-[18px] md:text-[16px] font-medium">
                {course.name}
              </h2>
              <h2 className="text-gray-400 text-[13px]">
                {course.createdBy.name}
              </h2>
            </div>
            <div className="flex gap-2 items-center mt-2">
              <Book className="h-6 w-6 text-purple-600 p-1" />
              <h2 className="text-[12px] text-gray-400">
                {course.totalChapters} Chapters
              </h2>
            </div>
            <h2>{course.free ? "Free" : "Paid"}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default CourseList;
