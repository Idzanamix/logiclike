import React, { useContext } from "react";
import { Sidebar } from "../Sidebar";
import { coursesContext } from "../../../context/CoursesContext";

// выношу логику отдельно от "гулпой" гомпоненты Sidebar
export function SidebarLogic() {
  const { coursesData } = useContext(coursesContext); // парсим данные из контекста
  const acc: any = new Set();
  coursesData.map(({ tags }) => tags.forEach(course => acc.add(course))); // собираем все названия курсов (без дубликатов)
  const courses = Array.from(acc) as string[];
  courses.sort().unshift('Все темы'); // сортируем по афлавиту и добавляем в начало 'все курсы' - главное

  return (
    <Sidebar courses={courses} />
  )
}
