import './LushCard.css'

const LushCard = ({cardData}) => {

    const LushCards = cardData.map((card, i) => {
        return (
            <div key={i} className="LushCard">
                <div className="card-color" style={{backgroundColor: card.background}}></div>
                <h3 className="title"> {card.title} </h3>
                <p className="text"> {card.paragraph} </p>
            </div>
        )
    })

    return LushCards
    
}




export default LushCard;