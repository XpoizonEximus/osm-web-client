import useGet from "./get";
import { API } from "../../../const/const";

export default function useRapoarte() {
  return useGet(API.rapoarte);
}
