import './Skills.css'
const skillSet = [
    {img:'assets/kisspng-brand-html-5-coaster-logo-product-design-contest-html-amp-css-2-15-5b6ed204301718.682006931533989380197.png',
     title: 'Html & CSS',
    },
    {
        img:'assets/js.png',
        title: 'JavaScript',

    },
    {
        img:'assets/1174949_js_react js_logo_react_react native_icon.png',
        title: 'React',

    },
    {
        img:'assets/node.png',
        title: 'Node.js',

    },
    {
        img:'assets/mongodb_image_processed-removebg-preview (1).png',
        title: 'MongoDB',

    },
    {
        img:'assets/express.png',
        title: 'Express',

    },
    {
        img:'assets/pngwing.com.png',
        title: 'PostgreSQL',

    },
]
export function Skills(){
    return (
            <section id="skills">
                        <h2>Skills</h2>
                        <div className="list-skills">
                                {skillSet.map((item)=>(
                                    <div className="list">
                                    <img src={item.img}/>
                                    <h5>{item.title}</h5>
                                    </div>
                                ))}

                        </div>
            </section>
    )}



