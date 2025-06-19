import React from 'react'; 
import '../styles/hero.css';

const Hero = () => {
    return (
        <section className = "hero" id = "home">
            <div className = "container">
                <div className = "hero-content">
                    <h1>Navya Mehrotra</h1>
                    <div className = "subtitle">Software Engineer | Researcher</div>
                    <div className = "cta-buttons">
                        <a href = "#projects" className = "btn btn-primary">See My Projects</a>
                    </div>
                </div>
            </div>
        </section>
    ); 
}; 

export default Hero;