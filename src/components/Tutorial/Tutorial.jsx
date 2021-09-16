import React, { useState } from "react";
import backGround from "./../../img/bg/firstPage.png";
import girl from "./../../img/girl/girlSecond.png";
import dressImg from "./../../img/items/dress.png";
import shirt from "./../../img/items/shirt.png";
import { useDispatch } from "react-redux";
import { chooseDress, chooseShirt } from "./../../store/actions";
import { useHistory } from "react-router-dom";
import "./Tutorial.scss";

const Tutorial = () => {
  const [dress, setDress] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  setTimeout(() => {
    setDress(true);
  }, 1000);

  const addDress = () => {
    dispatch(chooseDress());
    setTimeout(() => {
      history.push("/choose-bag");
    }, 3000);
  };
  const addShirt = () => {
    dispatch(chooseShirt());
    setTimeout(() => {
      history.replace("/choose-bag");
    }, 3000);
  };
  console.log(history);
  return (
    <div className="tutorial">
      <div className={dress ? "choose" : "choose-none"}>
        <p>Choose your dress</p>
      </div>
      <img className="bg-img" src={backGround} alt="bg" />
      <img className="girl-tutorial" src={girl} alt="girl" />
      <div className="choose-clothes">
        <div onClick={addDress} className="dress">
          <img src={dressImg} alt="dress" />
        </div>
        <div onClick={addShirt} className="dress">
          <img src={shirt} alt="shirt" />
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
