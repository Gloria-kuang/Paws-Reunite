import React from "react";
import "./ShareButton.scss";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";

function ShareButton() {
  return (
    <>
      <FacebookShareButton
        url="https://paws-reunite.web.app/"
        quote="Please help this pet to find its family!"
        hashtag="#lostpets"
      >
        <FacebookIcon size={36} className="share-button" />
      </FacebookShareButton>
      <TwitterShareButton
        title="Paws Reunite"
        url="https://paws-reunite.web.app/"
      >
        <TwitterIcon size={36} className="share-button" />
      </TwitterShareButton>
    </>
  );
}

export default ShareButton;
