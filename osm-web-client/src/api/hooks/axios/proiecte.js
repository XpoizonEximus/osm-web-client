import useGet from "./get";
import { API } from "../../../const/const";

export function useProiecteSumarry() {
  const raw_data = useGet(API.proiecte.sumarry);
  // const [txt, setTxt] = useState();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   if (raw_data)
  //     setData(
  //       JSON.parse(JSON.stringify(raw_data)).map((obj) => {
  //         let res = { ...obj, descr: "Denmark" };
  //         getData(obj?.descr_path).then((result) => {
  //           res.descr = JSON.parse(JSON.stringify(result));
  //           console.log(result);
  //         });
  //         return res;
  //       })
  //     );
  // }, [raw_data]);
  return raw_data;
}

export function useProiect(index) {
  return useGet(API.proiecte.detail.concat(String(index)));
}

export function useRandomProiecte() {
  return useGet(API.proiecte.random);
}
