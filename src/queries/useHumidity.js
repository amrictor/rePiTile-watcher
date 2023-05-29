import { useQuery } from "react-query";
import { request } from "../utils/request";

const fetchHumidity = async () => {
  let humidity = await request('/humidity', 'get');
  return Number(humidity);
}

export default () => useQuery('humidity', fetchHumidity, {
  suspense: true
})
