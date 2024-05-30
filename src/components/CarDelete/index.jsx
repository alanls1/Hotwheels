import React, { useState, useEffect } from "react";

import { getListCar, deleteACar } from "../../services/API";

import "./index.css";

export const CarDelete = (changeButton) => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(true);

  const handleClick = (id) => {
    deleteACar(id);
    setChange((prevChange) => !prevChange);
  };

  const fetchData = async () => {
    const res = await getListCar();
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, [change, changeButton]);

  return (
    <div className="container-item-colection" id="delete">
      {data &&
        data.map((element) => (
          <div className="item-colection" key={element.id}>
            <p className="list-name">
              Nome: <span>{element.name}</span>
            </p>
            <p className="list-name">
              Marca: <span>{element.brand}</span>
            </p>
            <p className="list-name">
              cor: <span>{element.color}</span>
            </p>
            <p className="list-name">
              Ano: <span>{element.year}</span>
            </p>
            <button className="primary" onClick={() => handleClick(element.id)}>
              Excluir
            </button>
          </div>
        ))}
      {data.length <= 0 && (
        <p className="list-empty">Não há carros a serem deletados.</p>
      )}
    </div>
  );
};
