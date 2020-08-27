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

export async function getPlaylist() {
  return axiosInstance.get(`/playlists`);
}

export async function getMe() {
  return secondInstance.get(`/me`);
}
