import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import axios from 'axios'; // from './api/axios.js';

const searchImages = async (term) => {
  const { data } = await axios(
    {
      url: 'http://localhost:8000/pics', // '/search/photos',
      method: 'get',
      params: {
        query: term,
      },
    }
  );
  console.log('CAAAATS', data);
  return data;
};
searchImages('fog');
console.log('FIRST');
console.log('Second');
const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
