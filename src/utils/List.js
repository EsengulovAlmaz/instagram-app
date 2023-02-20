
import { AiFillHome, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsCameraReels } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { RxHamburgerMenu} from "react-icons/rx"

export const SidebarList = [
    {
        id: 1,
        caption: "Home",
        icon: AiFillHome
    }, {
        id: 2,
        caption: "Search",
        icon: AiOutlineSearch
    },
    {
        id: 3,
        caption: "Reels",
        icon: BsCameraReels
    },
    {
        id: 4,
        caption: "Notifications",
        icon: AiOutlineHeart
    },
    {
        id: 5,
        caption: "Create",
        icon: FiEdit3
    },
    {
        id: 6,
        caption: "More",
        icon: RxHamburgerMenu
    }
]