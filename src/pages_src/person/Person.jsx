import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getPersonDet,
  getPersonSocial,
  getPersonWorks,
} from "../../redux_system/slices/persons_Slices/personSlice";
import LeftPersonSide from "./components/LeftPersonSide";
import RightPersonSide from "./components/RightPersonSide";
import Loading from "../components/Loading";
import MessageError from "../components/MessageError";

const Person = () => {
  const {
    personDet,
    personDetLoading,
    personDetErr,
    personWorks,
    personWorksLoading,
    personWorksErr,
    social,
    socialLoading,
    socialErr,
  } = useSelector((state) => state.person);

  const dispatch = useDispatch();
  const { personId, personName } = useParams();

  useEffect(() => {
    dispatch(getPersonDet(personId));
    dispatch(getPersonWorks(personId));
    dispatch(getPersonSocial(personId));
  }, []);

  return (
    <div className="mx-auto container gap-4 grid grid-cols-1 lg:grid-cols-3  my-8">
      {personDetLoading ? (
        <Loading />
      ) : personDetErr ? (
        <MessageError err={personDetErr} />
      ) : (
        <LeftPersonSide personDet={personDet} social={social} />
      )}

      {personDetLoading ? (
        <Loading />
      ) : personDetErr ? (
        <MessageError err={personDetErr} />
      ) : (
        <RightPersonSide personDet={personDet} personWorks={personWorks} />
      )}
    </div>
  );
};

export default Person;
