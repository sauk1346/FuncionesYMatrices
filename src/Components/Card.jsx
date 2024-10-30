import './CSS/Card.css';

const Card = ({ title, image }) => {
    return (
        <div className="card-container">
            <div className="card">
                <img src={image} alt={title} className="card-image" />
                <h2>{title}</h2>
            </div>
        </div>
    );
};
export default Card;
