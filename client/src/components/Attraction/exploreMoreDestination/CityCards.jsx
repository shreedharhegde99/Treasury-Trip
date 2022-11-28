import { Grid } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import backendURL from "../../../network";

export default function CityCards({ country }) {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      let response = await axios.get(
        `${backendURL}/attractions?country=${country}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid
      h="auto"
      w="102%"
      ml="-4"
      templateColumns={{ lg: "repeat(4,1fr)", md: "repeat(2,1fr)", sm: "1fr" }}
      templateRows="repeat(2, 1fr)"
      gap={4}
    >
      {data.map((el) => (
        <div key={el._id}>
          <div className="container_san">
            <img src={el.image} alt={el.place} />
            <p className="text">{el.place}</p>
            <p className="text2">{el.todo}</p>
          </div>
        </div>
      ))}
    </Grid>
  );
}
