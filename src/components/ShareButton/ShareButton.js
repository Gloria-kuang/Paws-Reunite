import React from "react";
import "./ShareButton.scss";
import { FacebookShareButton, FacebookIcon } from "react-share";

function ShareButton() {
  return (
    <FacebookShareButton
      url={"http://www.paws-reunite.com"}
      quote={"Please help to find this pet!"}
      hashtag="#lostpets"
    >
      <FacebookIcon size={36} className="share-button" />
    </FacebookShareButton>
  );
}

export default ShareButton;
