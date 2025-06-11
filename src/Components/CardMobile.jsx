import './Card.css';
import { useNavigate } from 'react-router-dom';

export default function CardVisit({

  title = 'Мобильные приложения',
  description = 'Нативные и кроссплатформенные мобильные приложения для Android и iOS. Разработка с использованием современных технологий и инструментов.',
  buttonText = 'Узнать больше',
to = '/message',
}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(to);
    }
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src="/mobil.png" alt={title} className="card-image" />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">{description}</p>
      <button className="card-btn" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}