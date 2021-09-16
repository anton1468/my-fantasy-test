import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import backGround from "./../../img/bg/firstPage.png";
import girlDress from "./../../img/girl/girlDress.png";
import girlShirt from "./../../img/girl/girlShirt.png";
const ChooseBag = () => {
  const history = useHistory();
  const selectedDress = useSelector((state) => {
    return state.dress;
  });
  console.log("dress", selectedDress);
  console.log(history);
  return (
    <div>
      <img className="bg-img" src={backGround} alt="" />
      {selectedDress ? (
        <img className="girl-tutorial" src={girlDress} alt="girl" />
      ) : (
        <img className="girl-tutorial" src={girlShirt} alt="girl" />
      )}
    </div>
  );
};

export default ChooseBag;
