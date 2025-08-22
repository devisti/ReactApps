import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function TypingAnimation() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Netflix Website"],
            typeSpeed: 80,    // typing speed
            backSpeed: 50,    // backspacing speed
            loop: true,       // repeat forever
            startDelay: 500,  // delay before start
            backDelay: 1500   // delay before backspacing
        });

        return () => typed.destroy();
    }, []);

    return (
        <h1 className="heading-1">
            <span ref={el}></span>
        </h1>

    );
}

export default TypingAnimation;
