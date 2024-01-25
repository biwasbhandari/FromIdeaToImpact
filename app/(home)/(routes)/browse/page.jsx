"use client";
import { useEffect, useState } from "react";
import CategoryFilter from "./_components/CategoryFilter";
import { getCourseList } from "@/app/_services/Index";
import CourseList from "./_components/CourseList";

function Browse() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList().then((res) => {
      console.log(res);
      setCourses(res.courseLists);
    });
  };
  return (
    <div className="p-5">
      <CategoryFilter />
      {courses ? <CourseList courses={courses} /> : null}
    </div>
  );
}
export default Browse;
