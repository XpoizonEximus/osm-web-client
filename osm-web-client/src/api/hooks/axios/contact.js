import useGet from "./get";
import send from "./send";
import { API } from "../../../const/const";

export function useContactData() {
  return useGet(API.contact.data);
}

export function sendContactForm(nume, email, titlu, continut) {
  return send(
    `${API.contact.form.index}&${API.contact.form.params.nume}=${nume}&${API.contact.form.params.email}=${email}&${API.contact.form.params.titlu}=${titlu}&${API.contact.form.params.continut}=${continut}`
  );
}
