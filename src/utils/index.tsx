import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

const checkStatus = (response:any) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error:any = new Error(response.statusText);
  error.response = response;
  throw error;
};

const header = () => {
  return {
    headers: {
      "Content-Type": "application/json",
    },
  };
};

const getUser = async (options:any) => {
  try {
    const response = await axios.get(`${baseURL}/users/${options.id}`, options);
    return checkStatus(response);
  } catch (error:any) {
    throw error.response;
  }
};

const getUserPost = async (options:any) => {
  try {
    const response = await axios.get(`${baseURL}/users/${options.id}/posts`);
    return checkStatus(response);
  } catch (error:any) {
    throw error.response;
  }
};

const putUserPost = async (id:any, options:any) => {
  try {
    const response = await axios.put(`${baseURL}/posts/${id}`, JSON.stringify(options), header());
    return checkStatus(response);
  } catch (error:any) {
    throw error.response;
  }
};

const deleteUserPost = async (id:any) => {
  try {
    const response = await axios.delete(`${baseURL}/posts/${id}`);
    return checkStatus(response);
  } catch (error:any) {
    throw error.response;
  }
};

export { getUser, getUserPost, putUserPost, deleteUserPost };