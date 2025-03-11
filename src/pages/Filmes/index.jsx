import axios from "axios";
import { useEffect, useState } from "react";
import { ContainerFilmes } from "./style";

export const Filmes = () => {
  const [populares, setPopulares] = useState();

  async function buscarFilmes() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt-BR"
    );
    setPopulares(data.results);
  }

  useEffect(() => {
    buscarFilmes();
  }, []);

  return (
    <>
      <h1>Filmes</h1>
      <h2>Filmes Populares</h2>
      <ContainerFilmes>
        {populares &&
          populares.map((element) => (
            <div>
              <h3>{element.title}</h3>
              <img
                src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                alt={`Poster do filme ${element.title}`}
              />
            </div>
          ))}
      </ContainerFilmes>
    </>
  );
};
