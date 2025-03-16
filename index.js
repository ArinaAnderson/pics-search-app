import express from 'express';
import dotenv from 'dotenv/config';
import cors from 'cors';
import axios from 'axios';
import process from 'process';
import url from 'url';

const PORT = 8000;
const BASE_URL = 'https://api.unsplash.com/search/photos';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json('hi');
});

app.get('/pics', (req, res) => {
  const reqUrl = new url.URL(`${BASE_URL}${req.url}`);
  const searchParams = new url.URLSearchParams(reqUrl.search);
  console.log('REQ', req.url, searchParams.get('query')); // REQ /pics?query=cats

  const searchImages = async () => {
    const { data } = await axios(
      {
        url: 'https://api.unsplash.com/search/photos', // '/search/photos',
        method: 'get',
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
          "Accept-Version": "v1",
        },
        params: searchParams,
        /*
        params: {
          query: term,
        },
        */
      }
    );
    // console.log(data.results);
    res.json(data.results);
    return data;
  };
  try {
    searchImages();
  } catch (err) {
    console.error('ERROR', err);
  }
});
/*
const options = {
  method: 'GET',
  url: 'https://api.unsplash.com/search/photos',
  headers: {
    Authorization: "....",
    "Accept-Version": "v1",
  },
};

axios.request(options)
  .then((response) => {
    console.log('RESPONSE', response);
  })
  .catch((err) => {
    console.log(err);
  })
*/

app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});
