import { useEffect, useState } from "react";

export const fetchPicture = async (date, setPicture) => {
  try {
    let response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
    );
    let json = await response.json();
    setPicture(json);
  } catch (error) {
    console.log(error);
  }
};

export const usePicture = (date) => {
  const [picture, setPicture] = useState();

  useEffect(() => {
    fetchPicture(date, setPicture);
  }, [date]);

  return picture;
};
