import { AxiosWAuth } from "../../../Utilities/AxiosWAuth";
import { setPost } from "../post/postSlice";

export const fetchPosts = (params) => (dispatch) => {
  AxiosWAuth()
    .get("posts", { params })
    .then((response) => {
      dispatch(setPost(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
