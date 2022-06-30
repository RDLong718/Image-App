//created this seperate file to house this login function because its all related to network stuff
import axios from "axios";
// this is a small library that we use to convert the query string
import qs from "qs";

//kick off our login process
const CLIENT_ID = "8238fb38afa2a95";
const ROOT_URL = "https://api.imgur.com";
export default {
  login() {
    //used to form up the query string see comment at bottom
    const querystring = {
      client_id: CLIENT_ID,
      response_type: "token",
    };
    //use a template string by using backticks, not quotes
    //creates the URL and tells the users browser to go there
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  },
  /**This allows us to fetch the images from the Imgur API
   * we use axios to fetch and remember "`" used just like in the
   * login function. Visit api docs imgur for different calls to API
   */
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  /** This umakes it capable to upload images and turnt ehm to an array
   * iterate through the area and geat the formData
   */
  uploadImages(images, token) {
    const promises = Array.from(images).map((image) => {
      const formData = new FormData();
      formData.append("image", image);
      /**This is the axios post request in order to get access to upload images. see imgur api */
      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    });
    // built it function that takes an array of promises and waits for it all to finish loading
    return Promise.all(promises);
  },
};

// https://api.imgur.com/oauth2/authorize?
// client_id=87edd67c1fb8440
// response_type=token
// state=APPLICATION_STATE
