import React from "react";
import { ReactComponent as SunSVG } from "./sunny_FILL0_wght400_GRAD0_opsz24.svg";
import { ReactComponent as DarkSVG } from "./dark_mode_FILL0_wght400_GRAD0_opsz24.svg";
import './DarkMode.css'
const iconTypes ={
    "sun": <SunSVG className="Icon-dark-svg" fill="white"/>,
    "dark": <DarkSVG  className="Icon-dark-svg" fill='white'/>,
}
function DarkMode({type, onClick}){
    return(
        <span
            className={`Icon-dark-container ${(type === 'sun') ? "sun" : "dark" }`}
            onClick = {onClick}
            >
                {iconTypes[type]}
        </span>
    )
}

export { DarkMode };