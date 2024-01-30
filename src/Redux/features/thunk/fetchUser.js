import { AxiosWAuth } from "../../../Utilities/AxiosWAuth";
import { fetchStates } from "../global/globalSlice";
import { changeFetchStates, setUser } from "../user/userSlice";

export const fetchUser = (userData) => (dispatch, getState) => {
  if (getState().user.fetchStates === fetchStates.not_fetched) {
    dispatch(changeFetchStates(fetchStates.fetching));
    AxiosWAuth()
      .post("auth/login", userData)
      .then((res) => {
        dispatch(setUser(res.data));
        localStorage.setItem("Blog-token", res.data.token);
        dispatch(changeFetchStates(fetchStates.fetched));
      })
      .catch((err) => {
        dispatch(changeFetchStates(fetchStates.fetch_failed));
      });
  }
};
