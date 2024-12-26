import instance from "./index";

export const getPosts = async () => {
  const data = await instance.get("/posts");
  return data;
};
