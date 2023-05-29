import { useQuery } from "react-query";
import { request } from "../utils/request";

const fetchTemperature = async () => {
  let temperature = await request('/temperature', 'get');
  return Number(temperature);
}

export default () => useQuery('temperature', fetchTemperature, {
  retry: 0,
  suspense: true
})