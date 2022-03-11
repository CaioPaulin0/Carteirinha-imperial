function colorCard(){
    const colorCard = document.getElementById('colorCard')
    const colorCardValue = colorCard.value
    const card = document.querySelector('.card')
    card.style.backgroundColor = colorCardValue
}

export default colorCard