import axios from "axios";

export const sendData = async (path) => {
  if (!typeof path) return {};
  try {
    const response = await axios.get(path);
    return response.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export default function send(path) {
  return sendData(path).then((result) => {
    return result;
  });
}
