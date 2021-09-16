import React from "react";
import backGround from "./../../img/bg/firstPage.png";
import { useSelector, useDispatch } from "react-redux";
import girlDressBlueBag from "./../../img/girl/girlDressBlueBag.png";
import girlDressOrangeBag from "./../../img/girl/girlDressOrangeBag.png";
import girlShirtBlueBag from "./../../img/girl/girlShirtBlueBag.png";
import girlShirtOrangeBag from "./../../img/girl/girlShirtOrangeBag.png";

const ChooseAccessory = () => {
  const dispatch = useDispatch();
  const selectedDress = useSelector((state) => {
    return state.dress;
  });
  const selectedBag = useSelector((state) => {
    return state.bag;
  });
  return (
    <div>
      <img className="bg-img" src={backGround} alt="" />
      {selectedDress ? (
        selectedBag ? (
          <img className="girl-tutorial" src={girlDressOrangeBag} alt="girl" />
        ) : (
          <img className="girl-tutorial" src={girlDressBlueBag} alt="girl" />
        )
      ) : selectedBag ? (
        <img className="girl-tutorial" src={girlShirtOrangeBag} alt="girl" />
      ) : (
        <img className="girl-tutorial" src={girlShirtBlueBag} alt="girl" />
      )}
    </div>
  );
};

export default ChooseAccessory;
