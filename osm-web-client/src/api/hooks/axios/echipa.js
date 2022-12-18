import useGet from "./get";
import { API } from "../../../const/const";
import { useEffect, useState } from "react";

export function useCD() {
  return useGet(API.echipa.cd);
}

export function useReprezentanti() {
  return useGet(API.echipa.reprezentanti);
}

export function useCoordonatori() {
  return useGet(API.echipa.coordonatori);
}

export default function useEchipa() {
  const cd = useCD();
  const reprezentanti = useReprezentanti();
  const coordonatori = useCoordonatori();
  
  const [echipa, setEchipa] = useState();

  useEffect(() => {
    setEchipa({
      cd: cd,
      reprezentanti: reprezentanti,
      coordonatori: coordonatori,
    });
  }, [cd, reprezentanti, coordonatori]);

  return echipa;
}
