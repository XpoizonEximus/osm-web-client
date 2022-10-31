import useGet from "./get";
import { API } from "../../../const/const";

export function useAmfiteatreSummary() {
  return useGet(API.amfiteatre.sumarry);
}

export function useAmfiteatru(index) {
  return useGet(API.amfiteatre.detail.concat(String(index)));
}
