"use client";

import { BsWhatsapp } from "react-icons/bs";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

interface propsTypes {
  className?: any;
  sharedUrl: string;
}

const SocialShare = ({ className, sharedUrl }: propsTypes) => {
  return (
    <ul
      className={`flex items-center gap-1 ${
        className?.root ? className?.root : ""
      } `}
    >
      <li>
        <FacebookShareButton url={sharedUrl}>
          <div className="block px-1 text-gray-500 hover:text-secondary">
            <FiFacebook />
          </div>
        </FacebookShareButton>
      </li>
      <li>
        <TwitterShareButton url={sharedUrl}>
          <div className="block px-1 text-gray-500 hover:text-secondary">
            <FiTwitter />
          </div>
        </TwitterShareButton>
      </li>
      <li>
        <LinkedinShareButton url={sharedUrl}>
          <div className="block px-1 text-gray-500 hover:text-secondary">
            <FiLinkedin />
          </div>
        </LinkedinShareButton>
      </li>
      <li>
        <WhatsappShareButton url={sharedUrl}>
          <div className="block px-1 text-gray-500 hover:text-secondary">
            <BsWhatsapp />
          </div>
        </WhatsappShareButton>
      </li>
    </ul>
  );
};

export default SocialShare;
