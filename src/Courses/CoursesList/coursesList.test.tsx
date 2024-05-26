import { render } from "@testing-library/react";
import React from "react";
import { CoursesList } from "../CoursesList/CoursesList";

describe('Render component', () => {
  it('Render courses list with no data', () => {
    const { getByTestId } = render(<CoursesList coursesData={[]} />);
    expect(getByTestId('courses-list')).toBeInTheDocument();
  });

  it('Render courses list with some data', () => {
    const { getByText } = render(<CoursesList coursesData={[
      {
        "name": "Шахматы",
        "id": "course:1",
        "image": "https://s3.logiclike.com/s3/logic-training/side-courses/files/MkHAmnYuhotzMc91WydqA7dkFrVPO3KoclrIJX2O.png",
        "bgColor": "#FF9966",
        "tags": [
          "Головоломки",
          "Шахматы",
          "Логика и мышление"
        ]
      },
      {
        "name": "Шахматы. Опытный",
        "id": "course:2",
        "image": "https://s3.logiclike.com/s3/logic-training/side-courses/files/gFWbs56OkIZQ0Ri6nMDWhipRk8u0XNadUpWuIgkN.png",
        "bgColor": "#F3C692",
        "tags": [
          "Головоломки",
          "Шахматы",
          "Логика и мышление"
        ]
      },
      {
        "name": "Канада",
        "id": "course:66",
        "image": "https://s3.logiclike.com/s3/logic-training/side-courses/files/dqZ7nHmfbBkSThg22HXSP64MBuO359OPjvJfu2U2.png",
        "bgColor": "#52CC8F",
        "tags": [
          "Страны и столицы"
        ]
      }
    ]} />);

    expect(getByText('Шахматы')).toBeInTheDocument();
    expect(getByText('Шахматы. Опытный')).toBeInTheDocument();
    expect(getByText('Канада')).toBeInTheDocument();
  });
});
