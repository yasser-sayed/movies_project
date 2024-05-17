import React, { useEffect } from "react";
import EpisodeHeader from "./components/EpisodeHeader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getEpisode,
  getSeason,
} from "../../../../../redux_system/slices/series_Slices/tvDetailsSlice";
import EpisodeBody from "./components/EpisodeBody";
import Loading from "../../../../components/Loading";
import MessageError from "../../../../components/MessageError";

const EpisodeCast = () => {
  const { theme } = useSelector((state) => state.config);
  const {
    season,
    seasonLoading,
    seasonErr,
    episode,
    episodeLoading,
    episodeErr,
  } = useSelector((state) => state.tvDetails);

  const { tvId, seasonNum, episNum } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeason({ tvId, seasonNum }));
    dispatch(getEpisode({ tvId, seasonNum }));
  }, []);

  return (
    <div>
      <EpisodeHeader episode={season?.episodes[episNum - 1]} />

      {episodeLoading ? (
        <Loading />
      ) : episodeErr ? (
        <MessageError err={episodeErr} />
      ) : (
        <EpisodeBody
          theme={theme}
          episode={season?.episodes[episNum - 1].crew}
          cast={episode?.cast}
        />
      )}
    </div>
  );
};

export default EpisodeCast;
