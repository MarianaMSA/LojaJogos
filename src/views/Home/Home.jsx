import { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import "./Home.css";
import axios from "axios";

export default function Home() {
  const [games, setGames] = useState([]);
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get("/game/findMany");
      setGames(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setMounted(true);
    getData();
  }, [mounted]);

  return (
    <div className="container">
      <Search />
      <Banner />
      {games.map((game) => (
        <Card
          id={game.id}
          image={game.image}
          nome={game.name}
          price={game.price}
          key={game.id}
        />
      ))}
    </div>
  );
}
