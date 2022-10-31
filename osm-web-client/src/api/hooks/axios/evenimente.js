import useGet from "./get";
import { API } from "../../../const/const";

export default function useEvenimente() {
  return useGet(API.evenimente);
}
