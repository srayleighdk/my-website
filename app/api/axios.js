import Axios from "axios";
import { baseURL } from "@/utils/config";

const iXanhApi = Axios.create({
  baseURL,
  headers: {
    Accept: "*/*",
  },
});

export default iXanhApi;
