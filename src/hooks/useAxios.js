import { useState } from "react";
import { AxiosWAuth } from "../Utilities/AxiosWAuth";

export const useAxios = ({
  reqType,
  endpoint,
  payload,
  config,
  initialValue,
}) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const doRequest = () => {
    setLoading(true);
    return AxiosWAuth()
      [reqType](endpoint, payload, config)
      .then((response) => {
        setData(response.data);
        return response.data;
      })
      .catch((err) => {
        setError(err);
        throw err;
      })
      .finally(() => setLoading(false));
  };
  return [data, doRequest, loading, error];
};
