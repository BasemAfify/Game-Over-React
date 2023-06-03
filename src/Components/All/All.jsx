import React, { useEffect } from "react";
import styles from "./All.module.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function All() {
  const [allgamesdata, setallgamesdata] = useState(null);
  const [isloading, setisloading] = useState(false);
  async function getallgames() {
    setisloading(true);

    let headers = {
      headers: {
        "X-RapidAPI-Key": "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    let { data } = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/games`,
      headers
    );
    console.log(data);
    setallgamesdata(data);
    if (data) {
      setisloading(false);
    }
  }

  useEffect(() => {
    getallgames();
  }, []);
  return (
    <>
      import {Helmet} from "react-helmet";
      <Helmet>
        <title>All</title>
      </Helmet>
      {allgamesdata ? (
        <div className="row text-center text-white-50  gx-5 mt-5 pt-5">
          {allgamesdata.map((gamedata) => (
            <div
              key={gamedata.id}
              className="col-md-4 col-lg-3 bg-dark shadow mb-4 pointer game games"
            >
              <Link
                className="text-decoration-none text-white-50"
                to={`/gamedetails/${gamedata.id}`}
              >
                <div className="">
                  <img className="w-100" src={gamedata?.thumbnail} alt="" />
                  <div className="d-flex justify-content-between m-3">
                    <p className="fs-6 game-description">{gamedata?.title}</p>
                    <button className="btn btn-info p-0 text-white ">
                      FREE
                    </button>
                  </div>
                  <p className="game-description">
                    {gamedata.short_description}
                  </p>
                  <div className="d-flex justify-content-between">
                    <i className="fas fa-plus-square"></i>
                    <div>
                      <div className="d-flex ">
                        <p className="bg-secondary text-dark rounded-2 fs-6 fw-light mx-2">
                          {" "}
                          {gamedata.genre}
                        </p>
                        {gamedata.platform === "PC (Windows)" ? (
                          <i className="fab fa-windows text-muted stretched-link"></i>
                        ) : (
                          <i className="fas fa-window-maximize text-muted stretched-link"></i>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="position-fixed top-0 bottom-0 end-0 start-0 text-white fs-1 d-flex justify-content-center align-items-center">
          <i className="fas fa-spinner fa-spin"></i>
        </div>
      )}
    </>
  );
}
