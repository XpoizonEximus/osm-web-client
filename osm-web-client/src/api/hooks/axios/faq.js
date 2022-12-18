import { useEffect, useState } from "react";
import { API } from "../../../const/const";
import useGet from "./get";

export default function useFaq(search = "") {
  const [path, setPath] = useState(API.faq.all);
  useEffect(() => {
    if (typeof search && search.length > 0)
      setPath(API.faq.search.concat(search));
    else setPath(API.faq.all);
  }, [search]);
  return useGet(path);
}
