import { useQuery } from "@tanstack/react-query";
import { Hero } from "../types";
import { fetchAllHeroes } from "../hooks/heores/fetchHeroes";

const Superheroes = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["superheroes"],
    queryFn: fetchAllHeroes,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Superheroes</h2>
      <ul className="hero-list">
        {data?.map((item: Hero) => (
          <li key={item?.id}>
            {item?.name} | {item?.actor}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Superheroes;
