import React, { useState } from "react";

import { postNewCar } from "../../services/API";

import "./index.css";

export const AddCar = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");

  const [success, setSuccess] = useState(true);
  const [canceled, setCanceled] = useState(true);

  const [error, setError] = useState(true);

  const handleClickAdd = () => {
    const object = {
      name,
      brand,
      color,
      year,
    };

    if (checkedInput(object)) {
      postNewCar(object);
      setName("");
      setBrand("");
      setColor("");
      setYear("");
      setSuccess(false);
      setInterval(() => setSuccess(true), 5000);
    } else {
      setError(false);
      setInterval(() => setError(true), 1000);
    }
  };

  const handleClickDelete = () => {
    setName("");
    setBrand("");
    setColor("");
    setYear("");
    setCanceled(false);
    setInterval(() => setCanceled(true), 1000);
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
    <div className="div-container" id="addNewCar">
      <div>
        <label for="name">Nome:</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label for="marca">Marca:</label>
        <input
          name="marca"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />
      </div>
      <div>
        <label for="color">Cor:</label>
        <input
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
      </div>
      <div>
        <label for="ano">Ano:</label>
        <input
          name="ano"
          type="number"
          max="4"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </div>

      <button onClick={() => handleClickAdd()}>Adicionar</button>
      <button onClick={() => handleClickDelete()}>Cancelar</button>
      <div>
        <p className="success-msg" hidden={success}>
          Adicionado com sucesso!
        </p>
        <p className="canceled-msg" hidden={canceled}>
          Cancelado!
        </p>
        <p className="canceled-msg" hidden={error}>
          Dados inválidos,
          <br /> Preencha todos os campos.
        </p>
      </div>
    </div>
  );
};
