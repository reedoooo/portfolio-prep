import React, { Component } from "react";

export default class Splash extends Component {
  render() {
    return (
      <div>
        <iframe
          width="640"
          height="480"
          src="https://sketchfab.com/playlists/embed?collection=8112b99e2daf42069780498adb0b7a39&autostart=0"
          title="common_lunar_globe"
          frameborder="0"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
        ></iframe>
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "13px",
            fontWeight: "normal",
            margin: "5px",
            color: "#4A4A4A",
          }}
        >
          <a
            href="https://sketchfab.com/googjuniyao/collections/common_lunar_globe-8112b99e2daf42069780498adb0b7a39"
            target="_blank"
            rel="nofollow noreferrer"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            common_lunar_globe
          </a>
          by{" "}
          <a
            href="https://sketchfab.com/googjuniyao"
            target="_blank"
            rel="nofollow noreferrer"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            googjuniyao
          </a>
          on{" "}
          <a
            href="https://sketchfab.com?utm_source=website&utm_medium=embed&utm_campaign=share-popup"
            target="_blank"
            rel="nofollow noreferrer"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            Sketchfab
          </a>
        </p>
      </div>
    );
  }
}
