import './Home.css';

export default function Home() {
  return (
    <div className='home'>
      <div className='content-container'>

        <div className='text-content'>
        <img src='DiGiStrong.png' alt='logo'/>
        <p>@ Разработка сайтов и приложений</p>
        <p>@ Цифровые решения для бизнеса</p>
        </div>
        
        <div className='photo-container'>
          <img src='/Digital.png' alt='Portrait' className='profile-photo'/>
          <a href="/info" className='photo-button'>&#x276F;</a>
        </div>

      </div>
    </div>
  );
}