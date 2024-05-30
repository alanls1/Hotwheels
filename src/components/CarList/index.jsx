import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

const Lista = (changeButton) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/cars").then((res) => setData(res.data));
  }, [changeButton]);

  return (
    <div className="container-item-colection" id="listCar">
      {data &&
        data.map((element) => (
          <div className="item-colection" key={element.id}>
            <p className="list-name">
              Nome: <span>{element.name}</span>
            </p>
            <p className="list-name">
              Marca:<span>{element.brand}</span>{" "}
            </p>
            <p className="list-name">
              cor: <span>{element.color}</span>
            </p>
            <p className="list-name">
              Ano:<span>{element.year}</span>
            </p>
          </div>
        ))}
      {data.length <= 0 && <p className="list-empty">Lista Vazia</p>}
    </div>
  );
};
export default Lista;
