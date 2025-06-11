import { useNavigate } from 'react-router-dom';
import './Card.css';

export default function CardVisit({

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
        <img src="/visit2.png" alt={title} className="card-image" />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">{description}</p>
      <button className="card-btn" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}