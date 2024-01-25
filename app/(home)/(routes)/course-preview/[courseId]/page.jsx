"use client";
import { getCourseById } from "@/app/_services/Index";
import { useEffect, useState } from "react";
import VideoPlayer from "./_components/VideoPlayer";
import CourseDetails from "./_components/CourseDetails";
import EnrollmentSection from "./_components/EnrollmentSection";
const CoursePreview = ({ params }) => {
  const [courseDetail, setCourseDetails] = useState([]);
  useEffect(() => {
    params.courseId ? getCourse(params.courseId) : null;
  }, []);

  const getCourse = () => {
    getCourseById(params.courseId).then((res) => {
      console.log(res);
      setCourseDetails(res.courseList);
    });
  };
  return (
    courseDetail?.name && (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2">
            <VideoPlayer videoUrl={courseDetail.chapter[0].video.url} />
            <CourseDetails courseDetail={courseDetail} />
          </div>
          <div className="p-5">
            <EnrollmentSection />
          </div>
        </div>
      </div>
    )
  );
};
export default CoursePreview;
