import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import backGround from "./../../img/bg/firstPage.png";
import girlDress from "./../../img/girl/girlDress.png";
import girlShirt from "./../../img/girl/girlShirt.png";
import firstBag from "./../../img/items/bagOrange.png";
import secondBag from "./../../img/items/bagblue.png";
import { chooseBagOrange, chooseBagBlue } from "./../../store/actions";
const ChooseBag = () => {
  const history = useHistory();
  const selectedDress = useSelector((state) => {
    return state.dress;
  });
  const dispatch = useDispatch();
  console.log("dress", selectedDress);
  console.log(history);

  const addBagOrange = () => {
    dispatch(chooseBagOrange());
    setTimeout(() => {
      history.push("/choose-accessory");
    }, 3000);
  };
  const addBagBlue = () => {
    dispatch(chooseBagBlue());
    setTimeout(() => {
      history.push("/choose-accessory");
    }, 3000);
  };

  return (
    <div>
      <img className="bg-img" src={backGround} alt="" />
      {selectedDress ? (
        <img className="girl-tutorial" src={girlDress} alt="girl" />
      ) : (
        <img className="girl-tutorial" src={girlShirt} alt="girl" />
      )}
      <div className="choose-clothes">
        <div onClick={addBagOrange} className="dress">
          <img src={firstBag} alt="dress" />
        </div>
        <div onClick={addBagBlue} className="dress">
          <img src={secondBag} alt="shirt" />
        </div>
      </div>
    </div>
  );
};

export default ChooseBag;
