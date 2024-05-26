import { useEffect, useState } from "react";
import axios from "axios";

export interface ICoursesData {
  bgColor: string;
  id: string;
  image: string;
  name: string;
  tags: string[];
}

let renderCount = 0;

export function useCoursesData() {
  const [coursesData, setCoursesData] = useState<ICoursesData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (renderCount > 0) return;
    renderCount++;
    setLoading(true);

    try {
      axios.get('https://logiclike.com/docs/courses.json')
        .then(({ data }) => {
          setCoursesData(data);

          setLoading(false);
        });

    } catch (error: unknown) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    coursesData,
    loading
  }
}
