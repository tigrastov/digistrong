import './Info.css';
import CardVisit from '../Components/CardVisit.jsx';

export default function Info(){
    return (
<div className='info'>
      <div className='info-container'>



<div className='text-cont'>
<h2>Ваш бизнес Online 24/7</h2>  
</div>

<div className='cards-container'>
<CardVisit/>
<CardVisit/>
<CardVisit/>
</div>




      </div>
    </div>
);
}