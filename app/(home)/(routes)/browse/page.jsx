"use client";
import { useEffect } from "react";
import CategoryFilter from "../../_components/CategoryFilter";
import { getCourseList } from "@/app/_services/Index";

function Browse() {
  useEffect(() => {
    getCourses();
  }, []);
}

const getCourses = () => {
  getCourseList().then((res) => {
    console.log(res);
  });
  return (
    <div>
      <CategoryFilter />
    </div>
  );
};
export default Browse;
