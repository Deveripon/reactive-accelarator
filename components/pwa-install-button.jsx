"use client";

import { useEffect, useState } from "react";
import { useToast } from "../hooks/use-toast";
import { Button } from "./ui/button";

export function PwaInstallButton() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isInstallable, setIsInstallable] = useState(false);
    const [isInstalling, setIsInstalling] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setIsInstallable(true);
        };

        const handleAppInstalled = () => {
            setIsInstallable(false);
            toast({
                title: "App Installed",
                description: "The app has been successfully installed!",
                variant: "success",
            });
        };

        window.addEventListener(
            "beforeinstallprompt",
            handleBeforeInstallPrompt
        );
        window.addEventListener("appinstalled", handleAppInstalled);

        return () => {
            window.removeEventListener(
                "beforeinstallprompt",
                handleBeforeInstallPrompt
            );
            window.removeEventListener("appinstalled", handleAppInstalled);
        };
    }, [toast]);

    const handleInstallClick = async () => {
        try {
            if (!deferredPrompt) {
                toast({
                    title: "Installation Info",
                    description:
                        "Add this site to your home screen for the best experience.",
                    variant: "info",
                });
                return;
            }

            setIsInstalling(true);
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            setDeferredPrompt(null);

            if (outcome === "accepted") {
                toast({
                    title: "Installation Started",
                    description: "The app is being installed...",
                    variant: "success",
                });
                setIsInstallable(false);
            } else {
                toast({
                    title: "Installation Cancelled",
                    description:
                        "You can install the app later from the same button.",
                    variant: "info",
                });
            }
        } catch (error) {
            console.error("Installation error:", error);
            toast({
                title: "Installation Failed",
                description:
                    "There was an error installing the app. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsInstalling(false);
        }
    };

    return (
        <Button
            size="lg"
            variant="secondary"
            onClick={handleInstallClick}
            disabled={isInstalling}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
            aria-label="Install application"
        >
            <svg
                className="mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
            </svg>
            {isInstalling ? "Installing..." : "Download App"}
        </Button>
    );
}
