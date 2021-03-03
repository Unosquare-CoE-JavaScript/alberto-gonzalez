import { useEffect, useState } from "react";

export const useNetwork = ({ url, method, headers }) => {
  let [state, setState] = useState({ loading: true });
  useEffect(() => {
    setState({ loading: true });

    const makeRequest = async () => {
      try {
        let response = await fetch(url, { method, headers });
        let data = await response.json();

        setState({ data, loading: false });
      } catch (error) {
        setState({ error, loading: false });
      }
    };
    makeRequest();
  }, [url, method, headers]);

  return state;
};
