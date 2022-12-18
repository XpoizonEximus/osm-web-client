import { useState, useEffect } from "react";
import axios from "axios";

export const getData = async (path) => {
  if (!typeof path) return {};
  try {
    const response = await axios.get(path);
    return response.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export default function useGet(path) {
  const [data, setData] = useState();

  useEffect(() => {
    getData(path).then((result) => {
      setData(result);
    });
  }, [path]);

  return data;
}
