import './Card.css';
import { useNavigate } from 'react-router-dom';

export default function CardVisit({
  title = 'Лендинг-пейдж',
  description = 'Если ваш бизнес отсутствует в интернете, то стоит задуматься: а существует ли в принципе этот бизнес?! Лендинг-пейдж — это одностраничный сайт, который поможет вам быстро и эффективно представить свой бизнес в интернете. Он поможет вам привлечь новых клиентов и увеличить продажи.',
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
        <img src="/landos.png" alt={title} className="card-image" />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">{description}</p>
      <button className="card-btn" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}