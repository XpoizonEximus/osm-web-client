import useGet from "./get";
import { API } from "../../../const/const";

export default function useRegulamente() {
  return useGet(API.parteneri);
}
