import { Layout } from "../services/Path";


import { AiFillHome, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { FiPlusSquare, FiUsers } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiUserCircle, BiMoviePlay } from "react-icons/bi";



export const SidebarList = [
    {
        id: 1,
        caption: "Home",
        icon: AiFillHome,
        route: Layout.home
    },
    {
        id: 12,
        caption: "Users",
        icon: FiUsers,
        route: Layout.users
    },
    {
        id: 2,
        caption: "Search",
        icon: AiOutlineSearch
    },
    {
        id: 3,
        caption: "Reels",
        icon: BiMoviePlay
    },
    {
        id: 4,
        caption: "Notifications",
        icon: AiOutlineHeart
    },
    {
        id: 5,
        caption: "Create",
        icon: FiPlusSquare
    },
    {
        id: 6,
        caption: "Profile",
        icon: BiUserCircle,
        route: "/profile"
    },
    {
        id: 7,
        caption: "More",
        icon: RxHamburgerMenu
    }
]

