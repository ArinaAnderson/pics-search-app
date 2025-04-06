import axios from 'axios';
import { API_ROUTES } from '../utils/router.js';

export default axios.create({
  baseURL: API_ROUTES.base,
});


/*
$ curl -X  GET https://api.unsplash.com/search/photos?query=cat \
> -H "Authorization: Client-ID R9ZFiuqGSxsCugOBOFVOehRHLVzPe3QzWN0pIDQPkmw" \
> -H "Accept-Version: v1"
*/
