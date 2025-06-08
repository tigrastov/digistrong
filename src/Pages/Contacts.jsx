import './Contacts.css';


export default function Contacts() {



  return (
    <div className='contacts'>
      <div className='contacts-container'>


        <div className='text-content'>

          <h2>Контакты</h2>

        <div className='link-container'>
           <img src='/phone.png' className='icon-link' alt='phone'/>
        <a href="tel:+79123456789" className="contact-link">+7 (912) 345-67-89</a>
        </div>


        <div className='link-container'>
          <img src='/telega.png'className='icon-link' alt='telega'/>
        <a href="https://t.me/username" target="_blank" className="contact-link">Telegra</a>
        </div>


         <div className='link-container'>
           <img src='mail.png'className='icon-link'alt='mail'/>
         <a href="mailto:example@mail.com" className="contact-link">
            <span>example@mail.com</span>
          </a>
        </div>

        </div>
        
        <div className='callback-form'>
          <img src='/Digital.png' alt='Portrait' className='profile-photo'/>

        </div>









      </div>

    </div>


  );
}