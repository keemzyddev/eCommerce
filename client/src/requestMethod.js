import axios from "axios";

const baseUrl = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2QzYzQ2OTcwY2JiZmI4MzI1ODJmNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDI0OTQ4MywiZXhwIjoxNjcwNTA4NjgzfQ.yJd4EdobcJruo45zoPs36lzv6qnJNymrXNEEPvYHSa8";

export const publicRequest = axios.create({
  baseURL: baseUrl,
});

export const userRequest = axios.create({
  baseURL: baseUrl,
  headers: { token: `Bearer ${TOKEN}` },
});
