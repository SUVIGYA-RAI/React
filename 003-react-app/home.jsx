import { useContext } from "react";
import { AppContext } from "./AppContext"

export default function Home() {
    const {course, student } = useContext(AppContext);

}

create--
home-product 
about us, contact us 
add  dark theme in home and contact us 
use tailwindcss 
hint-> create themecontext.js 
import { ThemeContext } from "./ThemeContext"
