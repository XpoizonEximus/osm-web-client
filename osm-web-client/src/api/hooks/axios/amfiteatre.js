import { useState, useEffect } from "react";
import useGet from "./get";
import { API } from "../../../const/const";

export function useAmfiteatre(search="") {
  const [path, setPath] = useState(API.amfiteatre.all);
  useEffect(() => {
    if (typeof search && search.length > 0)
      setPath(API.amfiteatre.search.concat(search));
    else setPath(API.amfiteatre.all);
  }, [search]);
  return useGet(path);
}

export function useAmfiteatru(index) {
  return useGet(API.amfiteatre.one.concat(index));
}
