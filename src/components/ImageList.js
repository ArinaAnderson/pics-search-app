import React, { useState, useEffect } from "react";
import _ from 'lodash';
import axios from '../api/axios.js';
import { API_ROUTES } from '../utils/router.js';
import ImageShow from './ImageShow.js';

const ImageList = ({ searchTerm }) => {
  console.log(searchTerm);
  const [imagesData, setImagesData] = useState([]);
  // console.log(imagesData);

  useEffect(() => {
    console.log(searchTerm);
    if (searchTerm.length === 0) {
      return;
    }
    const getImagesData = async () => {
      const data = await fetchImages(searchTerm);
      setImagesData(data);
    };
    try {
      getImagesData();
    } catch (err) {
      throw err
    }
    
    // fetchImages(searchTerm);
    // console.log(images);
    // setImagesData(images);
  }, [searchTerm]);

  const fetchImages = async (term) => {
    const { data } =  await axios({
      method: 'get',
      url: API_ROUTES.pics,
      params: {
        query: term,
      },
    });

    console.log('CAAAATS', data);
    return data;
  };

  const imagesList = imagesData.length > 0
    ? imagesData.map((el) => (
      <ImageShow key={el.id} alt_description={el.alt_description} urls={el.urls} description={el.description} />
    ))
    : null;
  // searchImages('mysterious morning');
  // console.log(imagesData);
  return (
    <ul className="image-list">
      {imagesList}
    </ul>
  );
}

export default ImageList;
