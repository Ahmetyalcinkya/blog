import { AxiosWAuth } from "../../../Utilities/AxiosWAuth";
import { setCategory } from "../global/globalSlice";

export const fetchCategories = () => (dispatch) => {
  AxiosWAuth()
    .get("categories")
    .then((response) => {
      dispatch(setCategory(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
