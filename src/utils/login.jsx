import { useState } from "react";
import { useHistory } from "react-router-dom";

const login = () => {};

export const useLogin = async ({ email, password }) => {
  const [token, setToken] = useState();
  const { push } = useHistory();

  if (token) {
    push("/home");
    return;
  }

  try {
  } catch ({ message }) {}
};
