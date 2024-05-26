import React, { ReactNode, createContext } from "react";
import { ICoursesData, useCoursesData } from "../hooks/useCoursesData";

interface ICoursesContextProvider {
  children: ReactNode;
}

interface IcoursesContext {
  coursesData: ICoursesData[];
  loading: boolean
}

export const coursesContext = createContext<IcoursesContext>({
  coursesData: [],
  loading: false
});

export function CoursesContextProvider({ children }: ICoursesContextProvider) {
  const { loading, coursesData } = useCoursesData(); // парсим данные promise

  return (
    <coursesContext.Provider value={{ coursesData, loading }}>
      {children}
    </coursesContext.Provider>
  )
}
