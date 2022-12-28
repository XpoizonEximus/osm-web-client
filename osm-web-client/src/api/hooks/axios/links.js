import useGet from "./get";
import { API } from "../../../const/const";

export default function useLinks() {
  return useGet(API.links);
}
