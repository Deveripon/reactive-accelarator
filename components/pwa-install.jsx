// @ts-nocheck
"use client";
import { useEffect, useState } from "react";

import Link from "next/link";
const PwaInstall = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      // Prevent the default installation prompt
      event.preventDefault();
      // Store the event for later use
      setDeferredPrompt(event);
    };

    // Listen for the beforeinstallprompt event
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    // warn the user if the app is already installed

    // Cleanup: remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);
  const handleEmailOpen = (event) => {
    event.preventDefault();
    window.location.href = "mailto:ঋণাত্মক - ২১@gmail.com";

  };
  const handleInstallClick = (event) => {
    event.preventDefault();
    if (deferredPrompt) {
      // Show the installation prompt
      deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the installation");
        } else {
          console.log("User dismissed the installation");
        }

        // Reset the deferredPrompt variable
        setDeferredPrompt(null);
      });
    }
  };

  return (
      <Link
        className="bg-transparent border text-gray-100 px-6 py-3 rounded"
        href="/reactive-accilarator"
        style={{ display: deferredPrompt ? "block" : "none" }}
        onClick={handleInstallClick}
      >
        ⬇️ Download app
      </Link>
  );
};

export default PwaInstall;
