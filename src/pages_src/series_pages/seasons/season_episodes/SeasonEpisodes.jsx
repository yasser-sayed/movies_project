import React, { useEffect } from "react";
import SeasonsHeader from "./components/SeasonsHeader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSeason } from "../../../../redux_system/slices/series_Slices/tvDetailsSlice";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import ShowMoreText from "react-show-more-text";
import Loading from "./../../../components/Loading";
import MessageError from "./../../../components/MessageError";

const SeasonEpisodes = () => {
  const { theme } = useSelector((state) => state.config);
  const { season, seasonLoading, seasonErr } = useSelector(
    (state) => state.tvDetails
  );

  const { tvId, seasonNum } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeason({ tvId, seasonNum }));
  }, []);
  return (
    <div>
      <SeasonsHeader season={season} />
      {seasonLoading ? (
        <Loading />
      ) : seasonErr ? (
        <MessageError err={seasonErr} />
      ) : (
        <section className="flex flex-wrap justify-center items-center gap-8 my-12 px-8">
          {season?.episodes?.map((episode, i) => (
            <Card
              key={i}
              className="w-96 lg:w-full flex-col lg:flex-row bg-[#9daaf7] bg-opacity-50 shadow-lg dark:bg-[#212529] rounded-lg"
            >
              <Link
                to={`/tv/${tvId}/season/${seasonNum}/episode/${episode.episode_number}`}
              >
                <img
                  src={
                    episode.still_path
                      ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${episode.still_path}`
                      : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
                  }
                  alt="poster"
                  className="lg:w-40 h-full rounded-t-lg lg:rounded-s-lg"
                />
              </Link>
              <CardBody className="flex flex-col items-center justify-center lg:items-start gap-3 w-full">
                <Link
                  to={`/tv/${tvId}/season/${seasonNum}/episode/${episode.episode_number}`}
                >
                  <Typography
                    variant="h4"
                    color={theme ? "gray" : "white"}
                    className=" hover:text-gray-500"
                  >
                    {episode.name}
                  </Typography>
                </Link>

                <Typography variant="h5" color="blue">
                  {episode.episode_number}
                </Typography>

                <Typography
                  variant="paragraph"
                  color="blue"
                  className=" font-bold"
                >
                  {episode.air_date} {""} {episode.runtime}min
                </Typography>

                <ShowMoreText
                  lines={2}
                  className="text-black dark:text-white"
                  anchorClass="text-blue-500 hover:text-blue-700 cursor-pointer"
                >
                  <Typography
                    color={theme ? "gray" : "white"}
                    className=" font-normal"
                  >
                    {episode.overview}{" "}
                  </Typography>
                </ShowMoreText>

                <Link
                  to={`/tv/${tvId}/season/${seasonNum}/episode/${episode.episode_number}`}
                  className="inline-block"
                >
                  <Button
                    color={theme ? "black" : "white"}
                    variant="text"
                    className="flex items-center gap-2 lowercase"
                  >
                    Full Cast & Crew
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </Link>
              </CardBody>
            </Card>
          ))}

          <div className="flex items-center justify-center w-full">
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
        </section>
      )}
    </div>
  );
};

export default SeasonEpisodes;
