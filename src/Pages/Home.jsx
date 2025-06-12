import './Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/info');
  };

  return (
    <div className='home'>
      <div className='content-container'>
        <div className='text-content'>
          <img className='logo' src='DiGiStrong.png' alt='logo' />
          <p>@ Разработка сайтов и приложений</p>
          <p>@ Цифровые решения для бизнеса</p>
        </div>

        <div className='photo-container'>
          <img src='/Digital.png' alt='Portrait' className='profile-photo' />
          <button onClick={handleClick} className='photo-button'>
            <img src="/icons8-forward-50.png" alt="Перейти" />
          </button>
        </div>
      </div>
    </div>
  );
}
