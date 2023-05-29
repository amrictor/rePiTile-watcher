import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { request } from "../utils/request";

const mutate = () => request('/mist', 'post');
export default () => {
  const [justMisted, setJustMisted] = useState(false);
  const queryClient = useQueryClient();
  const mutation = useMutation('mister', mutate, {
    active: !justMisted,
    onSuccess: () => {
      setJustMisted(true);
      setTimeout(() => setJustMisted(false), 30*1000)
    },
    onSettled: () => {
      queryClient.invalidateQueries();
    }
  })
  return {
    ...mutation,
    justMisted
  }
}
