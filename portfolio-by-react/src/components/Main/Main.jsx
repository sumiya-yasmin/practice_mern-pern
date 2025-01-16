import { About } from "../About/About";
import { Projects } from "../Projects/Projects";
import { Skills } from "../Skills/Skills";
import { Experience } from "../Experience/Experience";
import { Contact } from "../Contact/Contact";
import './Main.css'
import { portfolioData } from "../../data";
import { Education } from "../Education/Education";
export function Main() {
    return(
    <main>
        <About about={portfolioData.about}/>
        <Education education={portfolioData.education}/>
        <Skills/>
        <Projects projectLists={portfolioData.projectLists}/>
        <Experience/>
        <Contact/>
    </main>
    )
}