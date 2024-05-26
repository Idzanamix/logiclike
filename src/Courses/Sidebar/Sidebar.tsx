import React from "react";
import * as styles from './sidebar.scss'
import { NavLink } from "react-router-dom";
import { setCamelCase } from "../../../utils/setCamelCase";

interface ISidebar {
  courses?: string[];
}

export function Sidebar({ courses }: ISidebar) {
  return (
    <nav className={styles.sidebar}>
      {courses?.map(course => {
        // Делаем Camel Case в роутинге для удобного восприятия текста
        const courseReplaced = setCamelCase(course);

        return (
          <NavLink className={styles.link} to={courseReplaced} key={courseReplaced}>
            {course}
          </NavLink>
        )
      })}
    </nav >
  )
}
