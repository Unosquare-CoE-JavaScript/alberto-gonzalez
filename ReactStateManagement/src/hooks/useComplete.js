import { useEffect } from "react";

export const useComplete = (completedRequest) => {
  useEffect(() => {
    //network request
    completedRequest("test data");
  }, [completedRequest]);
};
