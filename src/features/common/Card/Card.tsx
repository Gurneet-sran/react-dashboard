import './Card.css'

type CardProps = {
  title?: string
  children: React.ReactNode
  className?: string
}

export function Card({ title, children, className = '' }: CardProps) {
  return (
    <div className={`card ${className}`}>
      {title && <h3 className="card__title">{title}</h3>}
      <div className="card__content">
        {children}
      </div>
    </div>
  )
} 