// Render the circles using React!
let style = {
    margin: '5px auto', 
    borderRadius: '50%'
}
const App = ({circles}) => (
    <div>
        {circles.map( (cir, index) => < Circle key={index} radius={cir.radius} backgroundColor={cir.color}/>)}
    </div>
)

const Circle = ({radius, backgroundColor}) => (
    <div style={{...style, backgroundColor, height: radius, width: radius}}></div>
)