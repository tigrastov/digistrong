import './Card.css';

export default function CardVisit({
  image = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  title = 'Aliquam diam consequat',
  description = 'Eget mattis at, laoreet vel amet sed velit aliquam diam ante, dolor aliquet sit amet vulputate mattis amet laoreet lorem.',
  buttonText = 'LEARN MORE',
  onButtonClick = () => {}
}) {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">{description}</p>
      <button className="card-btn" onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
}