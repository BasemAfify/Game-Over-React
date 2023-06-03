import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { gamedetailscontext } from "../../Context/Gamedetailscontext";
import { Helmet } from "react-helmet";

export default function Home() {
  const [populargames, setpopulargames] = useState(null);
  async function getpopulargames() {
    let headers = {
      headers: {
        "X-RapidAPI-Key": "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    let params = {
      params: { "sort-by": "popularity" },
    };
    let { data } = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/games`,
      headers,
      params
    );
    setpopulargames(data);
  }

  useEffect(() => {
    getpopulargames();
  }, []);

  return (
    <>
      <Helmet>
        <title></title>
      </Helmet>
      <main className="home  d-flex justify-content-center align-items-center flex-column pt-4 mt-5">
        <h3 className="h1 text-white-50 my-1">
          Find & track the best <span className="text-info">free-to-play</span>{" "}
          games!
        </h3>
        <p className="h5 fw-lighter text-muted my-2">
          Track what you've played and search for what to play next! Plus get
          free premium loot!
        </p>
        <Link className="btn btn-outline-light text-muted my-3" to="all">
          Brose Games
        </Link>
      </main>

      <div>
        <div className="d-flex align-items-center my-3 text-white-50">
          <i className="fas fa-robot mr-2 fa-2x"></i>
          <h2 className="h3 pt-2">Personalized Recommendations</h2>
        </div>

        <div className="row text-center text-white-50 game gx-5 mb-5 ">
          {populargames ? (
            <>
              <div className="col-md-6 col-lg-4 pointer games">
                <Link
                  className="text-decoration-none text-white-50"
                  to={`/gamedetails/${populargames[0]?.id}`}
                >
                  <div className="   " key={populargames[0].id}>
                    <img
                      className="w-100"
                      src={populargames[0].thumbnail}
                      alt=""
                    />

                    <div className="d-flex justify-content-between my-3 mx-2">
                      <h3>{populargames[0].title}</h3>
                      <button className="btn btn-info p-0 text-white ">
                        FREE
                      </button>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-lg-4  pointer games">
                <Link
                  className="text-decoration-none text-white-50"
                  to={`/gamedetails/${populargames[1]?.id}`}
                >
                  <div className="   " key={populargames[1].id}>
                    <img
                      className="w-100"
                      src={populargames[1].thumbnail}
                      alt=""
                    />

                    <div className="d-flex justify-content-between my-3 mx-2">
                      <h3>{populargames[1].title}</h3>
                      <button className="btn btn-info p-0 text-white ">
                        FREE
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
              <div
                className="col-md-6 col-lg-4  pointer games"
                key={populargames[2].id}
              >
                <Link
                  className="text-decoration-none text-white-50"
                  to={`/gamedetails/${populargames[2].id}`}
                >
                  <img
                    className="w-100"
                    src={populargames[2].thumbnail}
                    alt=""
                  />

                  <div className="d-flex justify-content-between my-3 mx-2">
                    <h3>{populargames[2].title}</h3>
                    <button className="btn btn-info p-0 text-white ">
                      FREE
                    </button>
                  </div>
                </Link>
              </div>
            </>
          ) : (
            <div className="position-fixed top-50 bo2ttom-0 end-0 start-0 text-white fs-1 d-flex justify-content-center align-items-center">
              <i className="fas fa-spinner fa-spin"></i>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
