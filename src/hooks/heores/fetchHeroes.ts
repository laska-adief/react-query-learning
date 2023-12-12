import axios from "axios";

const fetchAllHeroes = async () => {
  const response = await axios.get("http://localhost:4000/superheroes");
  const data = await response?.data;
  return data;
};

export { fetchAllHeroes };
