import './Card.css';
import { useNavigate } from 'react-router-dom';

export default function CardVisit({

  title = 'Интернет-магазин',
  description = 'Разве можно представить нашу страну без маркет-плейсов?! Электронные каталоги товаров, системы онлайн-оплаты, статусы заказов, панели администрирования. Создание интернет-магазина — это отличный способ начать или ускорить развитие своего бизнеса в интернете. Он поможет вам продавать товары и услуги, а также привлекать новых клиентов. А мы вам в этом поможем с испоьзованием современных серверных и клиентских технологий. ',
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
        <img src="/store.png" alt={title} className="card-image" />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">{description}</p>
       <button className="card-btn" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}