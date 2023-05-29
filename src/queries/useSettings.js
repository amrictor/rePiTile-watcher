import { useQuery } from "react-query";
import { request } from "../utils/request";

const fetchEvents = async () => {
  let events = await request('/events', 'get');
  return events;
}

export default () => useQuery('events', fetchEvents)