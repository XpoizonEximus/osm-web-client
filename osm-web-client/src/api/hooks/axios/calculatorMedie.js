import { API } from "../../../const/const";
import useGet from "./get";

export function useSpecializari() {
  return useGet(API.calculatorMedie.specializari.index);
}

export function useAni(specializare) {
  return useGet(
    `${API.calculatorMedie.ani.index}&${API.calculatorMedie.ani.params.specializare}=${specializare}`
  );
}

export function useMaterii(an) {
  return useGet(
    `${API.calculatorMedie.materii.index}&${API.calculatorMedie.materii.params.an}=${an}`
  );
}
