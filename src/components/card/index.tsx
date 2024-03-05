import './index.css'

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

export function Card({ imageUrl, title, description }: CardProps) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
