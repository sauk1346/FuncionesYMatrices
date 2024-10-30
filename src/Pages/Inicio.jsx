import './CSS/Inicio.css';

const Inicio = () => {
    return (
        <div className="container">
            <h1>[MVFM01] Proyecto </h1>
            
            <div className="introduccion">
                <p>Este proyecto es una aplicación educativa diseñada para enseñar matemáticas de forma interactiva. A través de esta plataforma, los usuarios podrán aprender sobre funciones matemáticas, Trigonometría y Matrices, utilizando ejemplos prácticos y visualizaciones que faciliten la comprensión.</p>
            </div>

            <div className="integrantes">
                <p>Integrantes</p>
                <ul>
                    <li>Diego Acevedo</li>
                    <li>Sergio Bustamante</li>
                    <li>Antonio Morales</li>
                    <li>Matías Vera</li>
                </ul>
            </div>

            <div className="profesor-info">
                <p className="profesor">Profesor Guía: Francisco Gonzáles</p>
            </div>
        </div>
    );
}
export default Inicio;
