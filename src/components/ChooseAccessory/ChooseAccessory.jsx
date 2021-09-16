import React from "react";
import backGround from "./../../img/bg/firstPage.png";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import girlDressBlueBag from "./../../img/girl/girlDressBlueBag.png";
import girlDressOrangeBag from "./../../img/girl/girlDressOrangeBag.png";
import girlShirtBlueBag from "./../../img/girl/girlShirtBlueBag.png";
import girlShirtOrangeBag from "./../../img/girl/girlShirtOrangeBag.png";
import choker from "./../../img/items/choker.png";
import pendant from "./../../img/items/pendant.png";
import glasses from "./../../img/items/glasses.png";
import {
  chooseAccessoryPendant,
  chooseAccessoryGlasses,
  chooseAccessoryChoker,
} from "../../store/actions";

const ChooseAccessory = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const selectedDress = useSelector((state) => {
    return state.dress;
  });
  const selectedBag = useSelector((state) => {
    return state.bag;
  });
  const addGlasses = () => {
    dispatch(chooseAccessoryGlasses());
    setTimeout(() => {
      history.push("/choose-bg");
    }, 3000);
  };
  const addPendant = () => {
    dispatch(chooseAccessoryPendant());
    setTimeout(() => {
      history.push("/choose-bg");
    }, 3000);
  };
  const addChoker = () => {
    dispatch(chooseAccessoryChoker());
    setTimeout(() => {
      history.push("/choose-bg");
    }, 3000);
  };

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

      <div className="choose-clothes">
        <div className="dress">
          {selectedDress ? (
            <img onClick={addChoker} src={choker} alt="dress" />
          ) : (
            <img onClick={addPendant} src={pendant} alt="dress" />
          )}
        </div>
        <div className="dress">
          <img onClick={addGlasses} src={glasses} alt="shirt" />
        </div>
      </div>
    </div>
  );
};

export default ChooseAccessory;
