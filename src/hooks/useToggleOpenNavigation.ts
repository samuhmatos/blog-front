"use client";
import { useEffect, useState } from "react";
import { eventUtils } from "@utils";

export function useToggleOpenNavigation() {
  const [open, setOpen] = useState<boolean>(false);

  function changeState(val: boolean) {
    eventUtils.emit("toggle-open-navigation", val);
    setOpen(val);
  }

  function toggleOpen(_open?: boolean) {
    if (_open) return changeState(_open);

    var windowWidth = window.innerWidth;

    if (windowWidth >= 768) {
      return changeState(true);
    } else {
      return changeState(false);
    }
  }

  useEffect(() => {
    eventUtils.on("toggle-open-navigation", (isOpen) => {
      setOpen(isOpen);
    });

    return eventUtils.remove("toggle-open-navigation", (isOpen) => {
      setOpen(isOpen);
    });
  }, []);

  useEffect(() => {
    toggleOpen();

    window.addEventListener("resize", (e) => {
      toggleOpen();
    });

    return window.removeEventListener("resize", (e) => {
      toggleOpen();
    });
  }, []);

  return {
    open,
    toggleOpen,
    setOpen,
  };
}
