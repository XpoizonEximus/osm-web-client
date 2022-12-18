import { useState, useEffect } from "react";
import useGet from "./get";
import { API } from "../../../const/const";

export function useProiecte(search = "") {
  const [path, setPath] = useState(API.proiecte.all);
  useEffect(() => {
    if (typeof search && search.length > 0)
      setPath(API.proiecte.search.concat(search));
    else setPath(API.proiecte.all);
  }, [search]);
  return useGet(path);
}

export function useProiect(index) {
  return useGet(API.proiecte.one.concat(index));
}

export function useRandomProiecte() {
  return useGet(API.proiecte.random);
}
