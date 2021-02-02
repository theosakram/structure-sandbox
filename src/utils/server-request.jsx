import { GlobalActions } from "../store/actions";
import Axios from "axios";

const { SET_LOADING, SET_ERROR } = GlobalActions;

export class Request {
  static GET = async ({ url, type, dispatch }) => {
    try {
      dispatch({ type: SET_LOADING, payload: true });
      const { data } = await Axios.get(url);
      dispatch({ type, payload: data });
    } catch ({ message }) {
      dispatch({ type: SET_ERROR, payload: message });
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  };

  static GET_BY_ID = async ({ url, type, id, dispatch }) => {
    try {
      dispatch({ type: SET_LOADING, payload: true });
      const { data } = await Axios.get(`${url}/${id}`);
      dispatch({ type, payload: data });
    } catch ({ message }) {
      dispatch({ type: SET_ERROR, payload: message });
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  };

  static POST = async ({ url, type, data, dispatch }) => {
    try {
      dispatch({ type: SET_LOADING, payload: true });
      await Axios.post(url, data);
      dispatch({ type, payload: data });
    } catch ({ message }) {
      dispatch({ type: SET_ERROR, payload: message });
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  };

  static DELETE = async ({ url, type, id, dispatch }) => {
    try {
      dispatch({ type: SET_LOADING, payload: true });
      await Axios.delete(`${url}/${id}`);
      dispatch({ type, payload: id });
    } catch ({ message }) {
      dispatch({ type: SET_ERROR, payload: message });
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  };
}
