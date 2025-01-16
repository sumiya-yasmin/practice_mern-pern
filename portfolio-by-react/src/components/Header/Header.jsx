import { portfolioData } from "../../data";
import { Intro } from "../Intro/Intro";
import { Navbar } from "../Navbar/Navbar";
import './Header.css'
export function Header(){
    return (
    <header>
        <Navbar/>
        <Intro introData={portfolioData.introData}/>
    </header>
    )
}