"use client";

import { useEffect } from "react";

const FacebookMessenger = () => {
  useEffect(() => {
    // Add fb-root div
    if (!document.getElementById("fb-root")) {
      const fbRoot = document.createElement("div");
      fbRoot.id = "fb-root";
      document.body.appendChild(fbRoot);
    }

    // Add customer chat div
    if (!document.getElementById("fb-customer-chat")) {
      const chatDiv = document.createElement("div");
      chatDiv.id = "fb-customer-chat";
      chatDiv.className = "fb-customerchat";
      chatDiv.setAttribute("attribution", "biz_inbox");
      chatDiv.setAttribute("page_id", "103710254867866"); // Your Page ID
      chatDiv.setAttribute("theme_color", "#0d6efd");
      chatDiv.setAttribute("logged_in_greeting", "Hi! How can we help you?");
      chatDiv.setAttribute(
        "logged_out_greeting",
        "Please log in to chat with us."
      );
      document.body.appendChild(chatDiv);
    }

    // Initialize FB SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v19.0",
      });
    };

    // Load SDK script
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      script.async = true;
      script.onload = () => {
        // Ensure chat div is parsed after SDK loads
        if (window.FB) window.FB.XFBML.parse();
      };
      document.body.appendChild(script);
    }
  }, []);

  return null;
};

export default FacebookMessenger;
