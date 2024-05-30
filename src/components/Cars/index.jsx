import React, { useState } from "react";

import "./index.css";
import colecao from "../../assests/colecao.webp";
import adicionar from "../../assests/adicionar.jpg";
import remover from "../../assests/remover.jpg";
import Lista from "../CarList";
import { AddCar } from "../CarForm/index";
import { CarDelete } from "../CarDelete/index";
import { CarEdit } from "../CarEdit/index";

function Cars() {
  const [change, setChange] = useState(true);

  const [visibleList, setVisibleList] = useState(true);
  const [visibleAdd, setVisibleAdd] = useState(true);
  const [visibleEdit, setVisibleEdit] = useState(true);
  const [visibleDelete, setVisibleDelete] = useState(true);

  const handleClickList = () => {
    setVisibleList(false);
    setVisibleAdd(true);
    setVisibleEdit(true);
    setVisibleDelete(true);
    setChange((prevChange) => !prevChange);
  };
  const handleClickAdd = () => {
    setVisibleAdd(false);
    setVisibleList(true);
    setVisibleEdit(true);
    setVisibleDelete(true);
    setChange((prevChange) => !prevChange);
  };
  const handleClickEdit = () => {
    setVisibleEdit(false);
    setVisibleDelete(true);
    setVisibleList(true);
    setVisibleAdd(true);
    setChange((prevChange) => !prevChange);
  };
  const handleClickDelete = () => {
    setVisibleDelete(false);
    setVisibleList(true);
    setVisibleAdd(true);
    setVisibleEdit(true);
    setChange((prevChange) => !prevChange);
  };

  return (
    <section className="cars-section">
      <div className="title">
        <h2>CRUD</h2>
        <p>Adicione, edite ou remova seus carros de forma prática e fácil</p>
      </div>
      <div className="container-item">
        <div className="item" onClick={() => handleClickList()}>
          <div>
            <button className="buttonAction">
              <a href="#listCar">Coleção de Carros</a>
            </button>
          </div>
          <img
            src={colecao}
            alt="Coleção de Carros da HotWheels"
            loading="lazy"
          />
        </div>
        <div className="item" onClick={() => handleClickAdd()}>
          <div>
            <button className="buttonAction">
              <a href="#addNewCar">Adicionar Novo Carro</a>
            </button>
          </div>
          <img src={adicionar} alt="Adicionar da HotWheels" loading="lazy" />
        </div>
        <div className="item" onClick={() => handleClickEdit()}>
          <div>
            <button className="buttonAction">
              <a href="#editCar">Editar Carro</a>
            </button>
          </div>
          <img src={adicionar} alt="Adicionar da HotWheels" loading="lazy" />
        </div>
        <div className="item" onClick={() => handleClickDelete()}>
          <div>
            <button className="buttonAction">
              <a href="#delete">Deletar Carro</a>
            </button>
          </div>
          <img
            src={remover}
            alt="Coleção de Carros da HotWheels"
            loading="lazy"
          />
        </div>
      </div>
      <div className="container-hidden">
        <div className="list-hidden" hidden={visibleList}>
          <Lista changeButton={change} />
        </div>
        <div className="list-hidden" hidden={visibleAdd}>
          <AddCar changeButton={change} />
        </div>
        <div className="list-hidden" hidden={visibleEdit}>
          <CarEdit changeButton={change} />
        </div>
        <div className="list-hidden" hidden={visibleDelete}>
          <CarDelete changeButton={change} />
        </div>
      </div>
    </section>
  );
}
export default Cars;
