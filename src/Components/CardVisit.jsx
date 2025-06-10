import { useNavigate } from 'react-router-dom';
import './Card.css';

export default function CardVisit({
  image = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  title = 'Сайт-визитка',
  description = 'Свой сайт-визитка — это отличный способ представить себя и свои услуги в интернете. Он поможет вам выделиться среди конкурентов и привлечь новых клиентов.',
  buttonText = 'Узнать больше',
  to = '/message', 
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">{description}</p>
      <button className="card-btn" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}