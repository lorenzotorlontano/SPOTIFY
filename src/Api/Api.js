import Axios from "axios";
 
const bracketsToken = localStorage.getItem("token")
let strArrayToken ;
let token;


if (bracketsToken !== null)
{
  strArrayToken = bracketsToken.split('"')
  token = strArrayToken[1]

}

const axiosInstance = Axios.create({
  baseURL: "https://api.spotify.com/v1/me",
  headers: {
    "Authorization": "Bearer" + " " +  token ,
  },
});

const secondInstance = Axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    "Authorization": "Bearer" + " " +  token ,
  },
});

const terzaInstance = Axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    "Authorization": "Bearer" + " " +  token ,
  },
});


export async function getPlaylist() {
  return axiosInstance.get(`/playlists`);
}

export async function getMe() {
  return secondInstance.get(`/me`);
}

export async function getAlbums() {
  return terzaInstance.get(`/albums?ids=41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37`);
}

export async function getAlbum(id) {
  return terzaInstance.get(`/albums/${id}`);
}

export async function getCategories() {
  return terzaInstance.get(`/browse/categories`);
}

export async function getNextCategories(urlNextTwenty) {
  return Axios.get(urlNextTwenty, {headers: {"Authorization" : "Bearer" + " " +  token }});
} 