import { toast } from "react-toastify";
import { AxiosWAuth } from "../../../Utilities/AxiosWAuth";
import { fetchStates } from "../global/globalSlice";
import { changeFetchStates, setUser } from "../user/userSlice";

export const fetchAutoLogin = () => (dispatch, getState) => {
  if (getState().user.fetchStates === fetchStates.not_fetched) {
    dispatch(changeFetchStates(fetchStates.fetching));
    AxiosWAuth()
      .post("auth/verify", localStorage.getItem("Blog-token"))
      .then((res) => {
        dispatch(setUser(res.data));
        localStorage.setItem("Blog-token", res.data.token);
        dispatch(changeFetchStates(fetchStates.fetched));
      })
      .catch((err) => {
        dispatch(changeFetchStates(fetchStates.fetch_failed));
        localStorage.removeItem("Blog-token");
        if (localStorage.getItem("Blog-token")) {
          toast.error("Authentication error! You need to login!");
        }
      });
  }
};
