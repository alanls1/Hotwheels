import React, { useState, useEffect } from "react";

import { getListCar, putCar } from "../../services/API";

import "./index.css";

export const CarEdit = (changeButton) => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(true);

  const [name, setName] = useState();
  const [brand, setBrand] = useState();
  const [color, setColor] = useState();
  const [year, setYear] = useState();

  const [id, setID] = useState("");

  const fetchData = async () => {
    const res = await getListCar();
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, [change, changeButton]);

  const handleClickEditValue = (element) => {
    setID(element.id);
    setName(element.name);
    setBrand(element.brand);
    setColor(element.color);
    setYear(element.year);
  };

  const handleClickEdit = () => {
    const object = {
      name,
      brand,
      color,
      year,
      id,
    };
    if (checkedInput(object)) {
      putCar(object);
      setName("");
      setBrand("");
      setColor("");
      setYear("");
    }
    setID("");
    setChange((prevChange) => !prevChange);
  };

  const checkedInput = (object) => {
    for (let item of Object.values(object)) {
      if (item === "") {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="container-item-colection" id="editCar">
      {data &&
        data.map((element) => (
          <div className="item-colectionEdit" key={element.id}>
            <div>
              <label htmlFor="name">Nome: </label>
              <input
                type="text"
                name="name"
                Value={element.name}
                onChange={(e) => setName(e.target.value)}
                disabled={element.id === id ? false : true}
              />
            </div>
            <div>
              <label htmlFor="name">Marca: </label>
              <input
                type="text"
                name="brand"
                Value={element.brand}
                onChange={(e) => setBrand(e.target.value)}
                disabled={element.id === id ? false : true}
              />
            </div>
            <div>
              <label htmlFor="color">cor: </label>
              <input
                type="text"
                name="color"
                Value={element.color}
                onChange={(e) => setColor(e.target.value)}
                disabled={element.id === id ? false : true}
              />
            </div>
            <div>
              <label htmlFor="year">Ano: </label>
              <input
                type="number"
                name="year"
                Value={element.year}
                Max={4}
                onChange={(e) => setYear(e.target.value)}
                disabled={element.id === id ? false : true}
              />
            </div>
            <button
              className={`primary ${element.id === id ? "hidden" : ""}`}
              onClick={() => handleClickEditValue(element)}
            >
              Editar
            </button>
            <button
              className={`primary ${element.id === id ? "" : "hidden"}`}
              onClick={() => handleClickEdit()}
            >
              Ok
            </button>
            <button
              className={`primary ${element.id === id ? "" : "hidden"}`}
              onClick={() => setID()}
            >
              Cancelar
            </button>
          </div>
        ))}
      {data.length <= 0 && (
        <p className="list-empty">Não há carros a serem Editados.</p>
      )}
    </div>
  );
};
