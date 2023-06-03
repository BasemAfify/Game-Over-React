import React, { Children } from 'react'
import { createHashRouter,RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx'
import All from './Components/All/All.jsx'
import NotFound from './Components/NotFound/NotFound.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import Pc from './Components/Pc/Pc.jsx'
import Browser from './Components/Browser/Browser.jsx'
import Releasedate  from './Components/Release-date/Release-date.jsx'
import Popularity from "./Components/Popularity/Popularity.jsx";
import Alphabetical from "./Components/Alphabetical/Alphabetical.jsx";
import Relevance from "./Components/Relevance/Relevance.jsx";
import Racing from "./Components/Racing/Racing.jsx";
import Sports from "./Components/Sports/Sports.jsx";
import Social from "./Components/Social/Social.jsx";
import Shotter from "./Components/Shotter/Shotter.jsx";
import Openworld from "./Components/Openworld/Openworld.jsx";
import Zombie from "./Components/Zombie/Zombie.jsx";
import Fantasy from "./Components/Fantasy/Fantasy.jsx";
import Actionrpg from "./Components/Actionrpg/Actionrpg.jsx";
import Action from "./Components/Action/Action.jsx";
import Fight from "./Components/Fight/Fight.jsx";
import Battleroyale from "./Components/BattleRoyale/BattleRoyale.jsx";
import { Gamedetailsprovider } from './Context/Gamedetailscontext.js'
import GameDetails from './Components/GameDetails/GameDetails.jsx'


export default function App() {
  let routers = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              {" "}
              <Home />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "all",
          element: (
            <ProtectedRoute>
              {" "}
              <All />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "platforms/pc",
          element: (
            <ProtectedRoute>
              {" "}
              <Pc />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "platforms/browser",
          element: (
            <ProtectedRoute>
              {" "}
              <Browser />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "Sort-by/release-date",
          element: (
            <ProtectedRoute>
              {" "}
              <Releasedate />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "Sort-by/popularity",
          element: (
            <ProtectedRoute>
              {" "}
              <Popularity />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "Sort-by/alphabetical",
          element: (
            <ProtectedRoute>
              {" "}
              <Alphabetical />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "Sort-by/relevance",
          element: (
            <ProtectedRoute>
              {" "}
              <Relevance />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "Categories/racing",
          element: (
            <ProtectedRoute>
              {" "}
              <Racing />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "Categories/sports",
          element: (
            <ProtectedRoute>
              {" "}
              <Sports />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "Categories/social",
          element: (
            <ProtectedRoute>
              {" "}
              <Social />
            </ProtectedRoute>
          ),
        },
        {
          path: "Categories/shotter",
          element: (
            <ProtectedRoute>
              {" "}
              <Shotter />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "Categories/open-world",
          element: (
            <ProtectedRoute>
              {" "}
              <Openworld />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "Categories/zombie",
          element: (
            <ProtectedRoute>
              {" "}
              <Zombie />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "Categories/fantasy",
          element: (
            <ProtectedRoute>
              {" "}
              <Fantasy />
            </ProtectedRoute>
          ),
        },
        {
          path: "Categories/action-rpg",
          element: (
            <ProtectedRoute>
              <Actionrpg />
            </ProtectedRoute>
          ),
        },
        {
          path: "Categories/action",
          element: (
            <ProtectedRoute>
              {" "}
              <Action />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "Categories/fight",
          element: (
            <ProtectedRoute>
              {" "}
              <Fight />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "Categories/battle-royale",
          element: (
            <ProtectedRoute>
              {" "}
              <Battleroyale />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "gamedetails/:id",
          element: (
            <ProtectedRoute>
              
              <GameDetails />
            </ProtectedRoute>
          ),
        },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        {
          path: "*",
          element: (
            <ProtectedRoute>
              {" "}
              <NotFound />{" "}
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <Gamedetailsprovider>

      <RouterProvider router={routers}></RouterProvider>
      </Gamedetailsprovider>
    </>
  );
}

