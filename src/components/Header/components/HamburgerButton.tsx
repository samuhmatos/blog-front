"use client";import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { eventUtils } from "@utils";

export function HamburgerButton() {
  const [open, setOpen] = useState<boolean>(false);

  const Path = (props: any) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      animate={open ? "open" : "closed"}
      {...props}
    />
  );

  function changeState(val: boolean) {
    eventUtils.emit("toggle-open-navigation", val);
    setOpen(val);
  }

  function toggleOpen() {
    var windowWidth = window.innerWidth;

    if (windowWidth >= 768) {
      changeState(true);
    } else {
      changeState(false);
    }
  }

  useEffect(() => {
    toggleOpen();

    window.addEventListener("resize", (e) => {
      toggleOpen();
    });

    return window.removeEventListener("resize", () => {});
  }, []);

  return (
    <button
      className="mr-2 md:hidden"
      type="button"
      onClick={() => changeState(!open)}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}
