import React from "react";
import { ICoursesData } from "../../../hooks/useCoursesData";
import * as styles from './course.scss'

interface ICourseProps {
  courseData: ICoursesData;
}

export function Course({ courseData: { name, image, bgColor } }: ICourseProps) {
  return (
    <li className={styles.item}>
      <picture
        style={{ background: bgColor }}
        className={styles.picture}
      >
        <img
          src={image}
          alt={name}
          className={styles.img}
        />
      </picture>

      <h2 className={styles.title}>
        {name}
      </h2>
    </li>
  )
}
