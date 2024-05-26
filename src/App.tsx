import React from "react";
import "./app.global.scss"
import { Content } from "./Content";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Courses } from "./Courses";
import { Error } from "./errorBanners/Error";
import { CoursesLogic } from "./Courses/CoursesLogic";
import { SidebarLogic } from "./Courses/Sidebar/SidebarLogic";
import { CoursesContextProvider } from "./context/CoursesContext";

export default function App() {
  return (
    <BrowserRouter>
      <CoursesContextProvider>
        <Content>
          <Courses>
            <SidebarLogic />
            <Routes>
              <Route path='*' element={<Error massage='ERROR 404: страница не найдена' />} />
              <Route path=':course' element={<CoursesLogic />} />
              <Route path='/' element={<Navigate to='/ВсеТемы' />} />
            </Routes>
          </Courses>
        </Content>
      </CoursesContextProvider>
    </BrowserRouter>
  );
}
