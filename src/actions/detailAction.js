import axios from "axios";
import { gameDetailsURL, gameSSURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const detailData = await axios.get(gameDetailsURL(id));
  const SSData = await axios.get(gameSSURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: SSData.data,
    },
  });
};
