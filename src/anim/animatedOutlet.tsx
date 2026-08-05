import { AnimatePresence } from "motion/react";
import React from "react";
import { useLocation, useOutlet } from "react-router";

export default function AnimatedOutlet() {
    const location = useLocation();
    const element = useOutlet();
    return(
        <AnimatePresence mode="sync">
            {element && React.cloneElement(element, { key : location.pathname })}
        </AnimatePresence>
    )
}