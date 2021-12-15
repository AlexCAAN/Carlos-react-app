import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faEraser,
    faDragon,
    faPlusSquare,
    faPhoneAlt,
    faAt,
    faClock,
    faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(
        faTrash,
        faSignOutAlt,
        faEdit,
        faEraser,
        faDragon,
        faPlusSquare,
        faPhoneAlt,
        faAt,
        faClock,
        faMapMarkerAlt
    )
}

export default Icons