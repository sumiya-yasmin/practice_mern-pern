import './Contact.css'
export function Contact(){
    return(
        <section id="Contact">
        <h2>Contact Me</h2> 
        <div className="list-c">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, soluta!</p>
            <form action="" method="post">
                <label for="name">Name:</label>
                <input type="text" placeholder="your name here"/>
                <label for="email">Email:</label>
                <input type="email" placeholder="Your email"/>
                <label for="message">Message:</label>
                <textarea placeholder="Send a text"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </section>
    )
}