import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCollec } from "../../../redux_system/slices/movies_Slices/movDetailsSlice";
import Loading from "../../components/Loading";
import MessageError from "../../components/MessageError";
import ColHeader from "./components/ColHeader";
import ColParts from "./components/ColParts";
import { Button } from "@material-tailwind/react";

const Collections = () => {
  const { collec, collecLoading, collecErr } = useSelector(
    (state) => state.movDetails
  );

  const { collecId, collecTitle } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCollec(collecId));
  }, []);
  return (
    <div>
      {collecLoading ? (
        <Loading />
      ) : collecErr ? (
        <MessageError err={collecErr} />
      ) : (
        <ColHeader collec={collec} />
      )}

      {collecLoading ? (
        <Loading />
      ) : collecErr ? (
        <MessageError err={collecErr} />
      ) : (
        <ColParts collec={collec} />
      )}

      <div className="flex items-center justify-center">
        <Button
          size="sm"
          variant="outlined"
          color="blue"
          onClick={() => navigate(-1)}
          className="lowercase text-sm"
        >
          Back a Step
        </Button>
      </div>
    </div>
  );
};

export default Collections;
