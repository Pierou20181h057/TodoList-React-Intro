import { ReactComponent as CheckSVG } from "./check_circle_FILL0_wght500_GRAD200_opsz24.svg";
import { ReactComponent as DeleteSVG } from "./cancel_FILL0_wght500_GRAD200_opsz24.svg"
import'./TodoIcon.css'
const iconTypes ={
    "check": (color) => <CheckSVG className="Icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG  className="Icon-svg" fill={color}/>,
}
function TodoIcon({type,color, onClick}){
    return(
        <span 
            className={`Icon-container 
            Icon-svg Icon-container-${type}`}
            onClick = {onClick}
            >
                {iconTypes[type](color)}
            </span>

    )
}
export { TodoIcon };