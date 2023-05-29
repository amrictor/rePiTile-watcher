import { useQuery } from "react-query";
import { request } from "../utils/request";

const fetchWaterLevel = async () => {
  let waterLevel = await request('/water', 'get');
  return Number(waterLevel);
}

export default () => useQuery('water-level', fetchWaterLevel, {
  suspense: true
})