import { useMemo, useState } from "react";
import { useNetwork } from "./useNetwork";

export const usePicture = (date) => {
  let options = useMemo(
    () => ({
      method: "GET",
      headers: { test: true },
      url: `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`,
    }),
    []
  );
  let { data, loading } = useNetwork(options);

  return { picture: data, loading };
};
