// Render the cards using React!
const App = ({cards}) => <div>{cards.map((card, i) => <Card key={i} card={card}/>)}</div>

// CHALLENGE: Write a separate Card component for use in the App component
// TIP: Use props to pass the suit and number to each Card component
const Card = ({card}) => <img width="160" src={`cards/${card.value + card.suit}.png`}/>