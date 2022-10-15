import axios from "axios";
import { useEffect, useState } from "react";

const instance = axios.create({
  baseURL: "https://api.teleport.org/api/",
});

export function useAPI(slug) {
  const [data, setData] = useState(null);
  const [imageData, setImageData] = useState(null);
  useEffect(() => {
    const getAreaDetails = async () => {
      const details = await instance({
        url: `urban_areas/slug:${slug}/`,
        method: "GET",
      })
        .then((res) => {
          // console.log(res.data);
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const getAreaImages = async () => {
      const image = await instance({
        url: `urban_areas/slug:${slug}/images/`,
        method: "GET",
      })
        .then((res) => {
          // console.log(res.data.photos[0].image.web);
          setImageData(res.data.photos[0].image.web);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getAreaDetails();
    getAreaImages();
  }, []);

  return {
    data,
    imageData,
  };
}
