import PropTypes from 'prop-types'
import './About.css'
export function About({about}){
    return(
         <section id="about">
                    <h2>About</h2>
                    <p>{about.description}</p>
                </section>
    )
}

About.propTypes={
    about:{
        description: PropTypes.string.isRequired
    }
}