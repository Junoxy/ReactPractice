import './Card.css'

const Card = ({title, children, cardClicked}) => {

    return (
        <div className="Card" onClick={() => cardClicked(title)}>
            <h3 className="title">{title}</h3>
            <div>{children}</div>
        </div>
    )
}

export default Card;