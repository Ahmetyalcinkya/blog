import { AxiosWAuth } from "../../../Utilities/AxiosWAuth";
import { setPost } from "../post/postSlice";

export const fetchPostsByTitle = (params) => (dispatch) => {
  AxiosWAuth()
    .get("posts/title", { params })
    .then((response) => {
      dispatch(setPost(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
