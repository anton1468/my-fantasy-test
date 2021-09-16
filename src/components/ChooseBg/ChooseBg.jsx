import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ChooseBg = () => {
  const selectedDress = useSelector((state) => {
    return state.dress;
  });
  const selectedBag = useSelector((state) => {
    return state.dress;
  });
  const selectedAccesory = useSelector((state) => {
    return state.accessory;
  });
  return <div></div>;
};

export default ChooseBg;
