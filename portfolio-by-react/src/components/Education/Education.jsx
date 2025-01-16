import PropTypes from "prop-types"
import './Education.css'
export function Education({education}){
    return(
        <section id="education">
                    <h2>Education</h2>
                    <div className="education-info">
                    <h3>{education.title}</h3>
                    <h4>{education.university}</h4>
                    <p>{education.cgpa}</p>
                    </div>
                </section>
    )
}

Education.propTypes={
    education : PropTypes.shape(
            {title: PropTypes.string.isRequired,
            university: PropTypes.string.isRequired,
            cgpa: PropTypes.number.isRequired,
            },
        ).isRequired
}