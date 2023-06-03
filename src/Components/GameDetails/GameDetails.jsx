import React, { useContext, useState } from "react";
import styles from "./GameDetails.module.css";
import { gamedetailscontext } from "../../Context/Gamedetailscontext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Slider from "react-slick";

export default function GameDetails() {
  const [gamedata, setgamedata] = useState(null);
  let params = useParams();
  console.log(params.id);
  const headers = {
    headers: {
      "X-RapidAPI-Key": "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  async function getgamedetails(id) {
    let { data } = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      headers
    );
    setgamedata(data);
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(gamedata);
  useEffect(() => {
    getgamedetails(params.id);
  }, []);
  return (
    <>
      {gamedata ? (
        <div className="row mt-5 pt-5 text-white-50">
          <div className="col-lg-4">
            <img className="w-100 rounded-2" src={gamedata.thumbnail} alt="" />
            <div className="row mt-3">
              <div className="col-3 ">
                <button className="btn color-secondry ">FREE</button>
              </div>
              <div className="col-9 ">
                <button className="btn btn-primary w-100 fw-bold">
                  <a
                    className="text-white"
                    target="_blank"
                    href={gamedata.game_url}
                  >
                    PLAY NOW <i className="fas fa-sign-out"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <h2 className="h1">{gamedata.title}</h2>
            <p className="fs-4">About {gamedata.title}</p>
            <p>{gamedata.description}</p>
            {gamedata.minimum_system_requirements ? (
              <>
                <p className="fs-4">Minimum System Requirements</p>
                <p>
                  <span>graphics : </span>
                  {gamedata.minimum_system_requirements?.graphics}
                </p>
                <p>
                  <span>memory : </span>
                  {gamedata.minimum_system_requirements?.memory}
                </p>
                <p>
                  <span>os : </span>
                  {gamedata.minimum_system_requirements?.os}
                </p>
                <p>
                  <span>processor : </span>
                  {gamedata.minimum_system_requirements?.processor}
                </p>
                <p>
                  <span>storage : </span>
                  {gamedata.minimum_system_requirements?.storage}
                </p>
              </>
            ) : null}

            {gamedata.screenshots[0] ? (
              <>
                <p className="fs-4"> {gamedata.title} Screenshots </p>
                <div>
                  <Slider {...settings}>
                    <div>
                      <img
                        className="w-100"
                        src={gamedata.screenshots[0]?.image}
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className="w-100"
                        src={gamedata.screenshots[1]?.image}
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className="w-100"
                        src={gamedata.screenshots[2]?.image}
                        alt=""
                      />
                    </div>
                  </Slider>
                </div>
              </>
            ) : null}

            <p className="fs-2 "> Additional Information</p>
            <div className="row">
              <div className="col-4 lh-1">
                <p>Tile</p>
                <p className="text-white">{gamedata.title}</p>
              </div>
              <div className="col-4 lh-1">
                <p>Developer</p>
                <p className="text-white">{gamedata.developer}</p>
              </div>
              <div className="col-4 lh-1">
                <p>Publisher</p>
                <p className="text-white">{gamedata.publisher}</p>
              </div>
              <div className="col-4 lh-1">
                <p>Release Date</p>
                <p className="text-white">{gamedata.release_date}</p>
              </div>
              <div className="col-4 lh-1">
                <p>Genre</p>
                <p className="text-white">{gamedata.genre}</p>
              </div>
              <div className="col-4 lh-1">
                <p>Platform</p>
                <p className="text-white">{gamedata.platform}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="position-fixed top-50 bo2ttom-0 end-0 start-0 text-white fs-1 d-flex justify-content-center align-items-center">
          <i className="fas fa-spinner fa-spin"></i>
        </div>
      )}
    </>
  );
}
