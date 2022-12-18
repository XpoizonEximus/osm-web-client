import useGet from "./get";
import { API } from "../../../const/const";

export default function useGhiduri() {
  return useGet(API.ghiduri);
}
