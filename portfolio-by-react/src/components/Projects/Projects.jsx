import './Projects.css'
import PropTypes from 'prop-types'
export function Projects({projectLists}){
    return(
        <section id="project">
        <h2>Projects</h2>
        <div className="list-projects">
                {projectLists.map((item)=> (
                <div className="list-p">
                 <h3>{item.name}</h3>
                 <p>{item.description}</p>
                 <p><a href={item.link}>View the project</a></p>
                </div>
                ))}
                </div>
                </section>
)}

Projects.propTypes={
    projectLists : PropTypes.arrayOf(
        PropTypes.shape(
            {name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            },
        )
    ).isRequired
}