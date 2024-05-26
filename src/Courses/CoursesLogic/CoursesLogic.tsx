import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CoursesList } from "../CoursesList";
import { resetCamelCase } from "../../../utils/resetCamelCase";
import { Error } from "../../errorBanners/Error";
import { coursesContext } from "../../context/CoursesContext";

export function CoursesLogic() {
  const { course } = useParams(); // извлекаем динамический роуд-тэг
  const {coursesData, loading} = useContext(coursesContext);
  const currentCourse = resetCamelCase(course || '') // преобразование Camel Case в привычный читаемый формат
  const currentCourseData = coursesData.filter(({ tags }) => tags.includes(currentCourse)); // фильтруем нужные данные по текущему тегу
  const finalData = course === 'ВсеТемы' ? coursesData : currentCourseData;

  return (
    <>
      {finalData.length > 0
        ?
        <CoursesList coursesData={finalData} data-testid="custom-element" />
        :
        loading
          ?
          <Error massage='Загрузка... 😸' notError />
          :
          <Error massage='Курсов по данной теме не найдено 😿' />}
    </>
  )
}
