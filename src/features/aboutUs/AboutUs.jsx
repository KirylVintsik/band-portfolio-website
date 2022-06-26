import React from "react";
import TrackList from "./TrackList";
import { YouTubeEmbed } from "../../shared";
import "./AboutUs.css";
import mocks from "../../__mocks__/tracks.json";

function AboutUs() {
  const renderBandInfo = () => (
    <div className="gradient">
      <div className="band-name-info-container">
        <h1 className="heading">Red Hot Chili Peppers</h1>
        <p className="band-bio-info">
          Red Hot Chili Peppers are an American rock band formed in Los Angeles
          in 1983. The group's musical style primarily consists of alternative
          rock with an emphasis on funk, as well as elements from other genres
          such as punk rock and psychedelic rock. When played live, their music
          incorporates elements of jam band due to the improvised nature of many
          of their performances.
        </p>
      </div>
    </div>
  );

  const renderHeader = () => (
    <div className="header-container">{renderBandInfo()}</div>
  );

  return (
    <div className="about-us-container">
      {renderHeader()}
      <TrackList tracks={mocks.tracks} />
      <YouTubeEmbed embedId="mCCGkZF1fww" />
    </div>
  );
}

export default AboutUs;
