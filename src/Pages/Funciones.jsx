import Card from "../Components/Card";
import linear_img from "../Components/assets/linear.png"
import quadratic_img from "../Components/assets/quadratic.png"
import cubic_img from "../Components/assets/cubic.png"
import logarithm_img from "../Components/assets/logarithm.png"
import exponential_img from "../Components/assets/exponential.png"



const Funciones = () => {

    const cards = [
        { title: 'Función Lineal', image: linear_img },
        { title: 'Función Cuadrática', image: quadratic_img },
        { title: 'Función Cúbica', image: cubic_img },
        { title: 'Función Exponencial', image: exponential_img },
        { title: 'Función Logarítmica', image: logarithm_img },
    ];

    return (
        <div>
            <h1>Introducción a Funciones</h1>
            <div className="card-container">
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} image={card.image} />
                ))}
            </div>
        </div>
    );
};

export default Funciones;