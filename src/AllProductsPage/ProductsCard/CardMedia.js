import React, { useState } from "react";
import { styled } from "@mui/system";

const LandscapeCardMedia = styled("div")({
  width: "100%",
  height: "200px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: "white",

  "& img": {
    width: "100%",
    height: "auto",
    display: "block",
  },
});

const PortraitCardMedia = styled("div")({
  width: "100%",
  height: "200px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "white",

  "& img": {
    height: "100%",
    display: "block",
  },
});

export default ({ src }) => {
  const [className, setClassName] = useState();
  const image = new Image();
  image.onload = () => {
    if (image.height < image.width) {
      setClassName("landscape");
    } else {
      setClassName("portrait");
    }
  };
  image.src = src;
  if (!className) {
    return <div>Loading...</div>;
  }
  return className === "landscape" ? (
    <LandscapeCardMedia>
      <img src={image.src} alt="" />
    </LandscapeCardMedia>
  ) : (
    <PortraitCardMedia>
      <img src={image.src} alt="" />
    </PortraitCardMedia>
  );
};
