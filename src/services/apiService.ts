import axios from 'axios';
import { IApiResponse } from '../interfaces/api-response';

const API_URL = import.meta.env.VITE_API_URL

const REQUEST_MOVIES_URL = `${API_URL}/film/catalog`

// const REQUEST_MOVIES_URL = `http://localhost:5145/api/film/catalog`

export async function GetMovies(){
    // const movieResponse:IApiResponse<any> = await axios.get(REQUEST_MOVIES_URL);
    const movieResponse:IApiResponse<MovieApiResponse> = await axios.get(REQUEST_MOVIES_URL);
   
    return movieResponse.data;

}