import React from "react";
import { ExternalLink } from "react-external-link";

import { FaTelegramPlane, FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function ContactList() {
  return (
    <div className="contacts-placeholder">
      <ExternalLink
        className="contact-container"
        href="https://t.me/wh_breathing_assistant"
      >
        <FaTelegramPlane size={50} />
        <p>@wh_breathing_assistant</p>
      </ExternalLink>
      <ExternalLink
        className="contact-container"
        href="mailto:contact@breathing-assistant.com"
      >
        <MdEmail size={50} />
        <p>contact@breathing-assistant.com</p>
      </ExternalLink>
      <ExternalLink
        className="contact-container"
        href="https://twitter.com/yar_ko_de"
      >
        <FaTwitterSquare size={50} />
        <p>@yar_ko_de</p>
      </ExternalLink>
    </div>
  );
}
