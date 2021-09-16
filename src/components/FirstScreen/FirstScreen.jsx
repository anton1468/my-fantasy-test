import React, { useState } from "react";
import "./FirstScreen.scss";
import backGround from "./../../img/bg/firstPage.png";
import man from "./../../img/man/man.png";
import girlFirst from "./../../img/girl/girlFirst.png";
import { useHistory } from "react-router-dom";

const FirstScreen = () => {
  const [dialogMan, setDialogMan] = useState(false);
  const [manBlock, setManBlock] = useState(true);
  const [girlBlock, setGirlBlock] = useState(false);
  const [dialogGirl, setDialogGirl] = useState(false);
  const history = useHistory();

  setTimeout(() => {
    setDialogMan(true);
  }, 2000);
  setTimeout(() => {
    setManBlock(false);
  }, 4000);
  setTimeout(() => {
    setGirlBlock(true);
  }, 4000);
  setTimeout(() => {
    setDialogGirl(true);
  }, 6000);
  setTimeout(() => {
    history.push("/tutorial");
  }, 7000);

  return (
    <div className="card">
      <img className="bg-img" src={backGround} alt="no" />
      <div className={manBlock ? "dialog-man" : "dialog-man-none"}>
        <img className="man" src={man} alt="" />
        <div className={dialogMan ? "dialog" : "dialog-none"}>
          <p>Honey, tomorrow we will go on vacation✈️</p>
        </div>
      </div>
      <div className={girlBlock ? "dialog-girl" : "dialog-girl-none"}>
        <img className="girl" src={girlFirst} alt="girl" />
        <div className={dialogGirl ? "dialog" : "dialog-none"}>
          <p>Oh, I don't have much time to pack my things</p>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
