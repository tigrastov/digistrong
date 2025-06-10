import './Card.css';
import { useNavigate } from 'react-router-dom';

export default function CardVisit({
  image = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  title = 'Система онлайн-записи',
  description = 'Записаться к специалисту стало проще! Система онлайн-записи позволяет клиентам записываться на приём в удобное для них время, а вам — управлять расписанием и контролировать загрузку.',
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
        <img src="public/registr.png" alt={title} className="card-image" />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">{description}</p>
      <button className="card-btn" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}