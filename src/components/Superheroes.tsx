import { useQuery } from "@tanstack/react-query";
import { fetchAllHeroes } from "../hooks/heores/fetchHeroes";

const Superheroes = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["superheroes"],
    queryFn: fetchAllHeroes,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return <div>Superheroes</div>;
};
export default Superheroes;
