// Render the rectangle using React!
const App = ({rectangle}) => (
        <div style={{
            width: rectangle.width,
            height: rectangle.height,
            backgroundColor: rectangle.color
        }}></div>
)