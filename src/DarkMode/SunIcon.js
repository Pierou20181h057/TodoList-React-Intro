import React from "react";
import { DarkMode } from "./index";

function SunIcon ({onClick}){
    return(
        <DarkMode
            type="sun"
            onClick={onClick}
        />
    )
}

export {SunIcon};