import React, { memo } from "react";
import { ICoursesData } from "../../hooks/useCoursesData";
import * as styles from './courseslist.scss'
import { Course } from "./Course/Course";

interface ICoursesListProps {
  coursesData: ICoursesData[];
}

export const CoursesList = memo(({ coursesData }: ICoursesListProps) => {
  return (
    <ul className={styles.list} data-testid="courses-list">
      {coursesData.map((course) => (
        <Course courseData={course} key={course.id} />
      ))}
    </ul>
  )
})
