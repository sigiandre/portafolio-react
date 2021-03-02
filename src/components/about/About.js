import React from 'react';
import './About.css';
import Image1 from '../../media/Andre1.jpeg';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Déjame decirte algo sobre mi</h3>
                <p>Estudiante de la carrera de Ingeniería de Software de la UPC, con interés en el desarrollo web y móvil, análisis de datos, manejador de diseño de base de datos. Me he desempeñado con los siguientes lenguajes de programación: C++, C#, Visual Basic, Java, Python, SQL, MySQL, PostgreSQL, Oracle Database. Con gran capacidad también para crear, planificar, orientar proyectos, responsable y dinámico. Aportaría al grupo con análisis de datos, manejo de base de datos, desarrollo del aplicativo web, así como el desarrollo del Backend y Frontend.</p>
            </div>
            <div className="about-img">
                <img src={Image1} alt="about" />
            </div>
        </div>
    )
}

export default About;
