// Render the name tags using React!
const App = ({ nameTags }) => (<div>{nameTags.map((tag, i) => <NameTag key={i} name={tag} />)}</div>)

// CHALLENGE: Write a separate NameTag component for use in the App component
// TIP: Use props to pass the name to each NameTag component
const NameTag = ({name}) =>(
    <div className="mx-auto w-50 text-center border m-1">
        <div className="bg-primary text-white p-3 h3">Hello, my name is:</div>
        <div className="h4 p-5">{name}</div>
    </div>
)