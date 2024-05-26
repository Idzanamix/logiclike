import React from "react";
import * as styles from './courses.scss'
import { IContent } from "../Content";

export function Courses({ children }: IContent) {
  return (
    <section className={styles.courses}>
      {children}
    </section>
  )
}
