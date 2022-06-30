import { router } from "../../main";
import api from "../../api/imgur";
const state = {
  /**When the application first boots up we'll have an
   * empty list of images
   */
  images: [],
};

const getters = {
  /**Function that returns the entire list of images that exist.
   *
   */
  allImages: (state) => state.images,
};

const actions = {
  /**"rootState" Gives us the ability to reach into the state of
   * other modules. We get the fetchImages from the api file that
   *  we imported */
  async fetchImages({ rootState, commit }) {
    /**Allows us to reach into the auth module and ppull the token out */
    const { token } = rootState.auth;
    //take that token we received from line 22 and use it for the
    //fetchImages functions
    const response = await api.fetchImages(token);
    /** We got back the response object now we need to set Images
     * to the response
     */
    commit("setImages", response.data.data);
  },
  async uploadImages({ rootState }, images) {
    //Get the access token
    const { token } = rootState.auth;
    //Call our API module to do the upload
    await api.uploadImages(images, token);
    // Redirect our user to imageList component
    router.push("/");
  },
};

const mutations = {
  /**Replace whatever is in the state with the array of images.  */
  setImages: (state, images) => {
    state.images = images;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
