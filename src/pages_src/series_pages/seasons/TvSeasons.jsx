import React, { useEffect } from "react";
import SecHeader from "../../components/SecHeader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTvDet } from "../../../redux_system/slices/series_Slices/tvDetailsSlice";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import ShowMoreText from "react-show-more-text";
import Loading from "../../components/Loading";
import MessageError from "../../components/MessageError";

const TvSeasons = () => {
  const { theme } = useSelector((state) => state.config);
  const { tvDet, tvDetLoading, tvDetErr } = useSelector(
    (state) => state.tvDetails
  );

  const navigate = useNavigate();
  const { tvId, tvName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTvDet(tvId));
  }, []);

  return (
    <div>
      <SecHeader />

      {tvDetLoading ? (
        <Loading />
      ) : tvDetErr ? (
        <MessageError err={tvDetErr} />
      ) : (
        <section className="flex flex-row items-center justify-center md:flex-col gap-5 px-10 my-10 flex-wrap ">
          {tvDet?.seasons.map((season, i) => (
            <Card
              key={i}
              className="w-96 lg:w-full flex-col lg:flex-row bg-[#9daaf7] bg-opacity-50 shadow-lg dark:bg-[#212529] rounded-lg"
            >
              <Link
                to={`/tv/${tvId}/name/${season.name}/season/${season.season_number}`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${season.poster_path}`}
                  alt="poster"
                  className="w-full lg:w-40 rounded-t-lg lg:rounded-s-lg"
                />
              </Link>
              <CardBody className="flex flex-col items-center justify-center lg:items-start gap-5">
                <div>
                  <Link
                    to={`/tv/${tvId}/name/${season.name}/season/${season.season_number}`}
                  >
                    <Typography
                      variant="h5"
                      color={theme ? "gray" : "white"}
                      className=" hover:text-gray-500 inline-block"
                    >
                      {season.name}
                      {""}
                    </Typography>
                  </Link>

                  <Typography
                    variant="h5"
                    color={theme ? "gray" : "white"}
                    className="inline-block ms-4"
                  >
                    {season.air_date?.slice(0, 4)} | {season.episode_count}{" "}
                    Episodes
                  </Typography>
                </div>

                <Typography
                  variant="paragraph"
                  color={theme ? "gray" : "white"}
                >
                  Season{" "}
                  <span className="text-blue-500">{season?.season_number}</span>{" "}
                  of <span className="text-blue-500">{tvName}</span> premiered
                  on <span className="text-blue-500">{season.air_date}</span>.{" "}
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
                    {season.overview
                      ? season.overview
                      : "there is no overview for this season"}{" "}
                  </Typography>
                </ShowMoreText>
              </CardBody>
            </Card>
          ))}
        </section>
      )}

      <div className="flex items-center justify-center my-4">
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

export default TvSeasons;
