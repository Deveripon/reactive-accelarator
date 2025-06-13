"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function PwaInstallButton() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isInstallable, setIsInstallable] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Store the event for later use
            setDeferredPrompt(e);
            // Update UI to notify the user they can install the PWA
            setIsInstallable(true);
        };

        window.addEventListener(
            "beforeinstallprompt",
            handleBeforeInstallPrompt
        );

        return () => {
            window.removeEventListener(
                "beforeinstallprompt",
                handleBeforeInstallPrompt
            );
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) {
            // If the app is already installed or not installable, show a message
            alert(
                "Click here to install PWA app! Add this site to your home screen for the best experience."
            );
            return;
        }

        // Show the install prompt
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;

        // We no longer need the prompt. Clear it up
        setDeferredPrompt(null);

        if (outcome === "accepted") {
            console.log("User accepted the install prompt");
            setIsInstallable(false);
        } else {
            console.log("User dismissed the install prompt");
        }
    };

    return (
        <Button
            size="lg"
            variant="secondary"
            onClick={handleInstallClick}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
        >
            <svg
                className="mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
            </svg>
            Download App
        </Button>
    );
}
