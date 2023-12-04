import React from "react";
import { DarkMode } from "./index";

function DarkIcon ({onClick}){
    return(
        <DarkMode
            type="dark"
            onClick={onClick}
        />
    )
}

export {DarkIcon};