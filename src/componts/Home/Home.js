import React from "react";
import { Homesidebar } from "./Homesidebar";
import { Homefide } from "./Homefide";
import "./Home.css";
import { Timeline } from "../Post/Timeline";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { Sugg } from "../Sugg";
export const Home = () => {
  return (
    <div className="w-100">
      
      <div className="w-100 flex">
        <div className="homeslidebar w-15">
          <Homesidebar />
        </div>
        <div className="homefied w-1140">
          <div className="hometopbar">
            <button><Link to='/home'>New Posts</Link></button>
          </div>
          <div className="w-1140 flex">
            <div className="w-55">
              <div className="story flex">
                <Homefide />
              </div>
              <div className="postfild">
                <Timeline />
              </div>
            </div>
            <div className="suggetion w-30">
              <div className="homesug">
                <Sugg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
