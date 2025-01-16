import PropTypes from "prop-types";
import { Socials } from "../Socials/Socials";

import './Intro.css'


export function Intro({introData}){
    return(
        <section className="intro">
        <div className="text">
            <div className="name">
                <p>I'M</p>
                <h4>{introData.name}</h4>
            </div>
            <p>{introData.designation}</p>
          <Socials/>
        </div>
        <div className="img">
            <img src="assets/360_F_601291576_9vcyvR9S6YtTQjHLXsSQT25ziNUgR9Ec.jpg"/>
        </div>
    </section>
    )
}
Intro.proptypes ={
    introData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    designation : PropTypes.string.isRequired,
    }).isRequired
}