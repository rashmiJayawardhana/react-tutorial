import Main from "./components/Main";  // Importing the `Main` component
import IncDecButton from "./components/useStateExamples/IncDecButton";
import IncDecButtonConsoleLog from "./components/useEffectExamples/IncDecButtonConsoleLog";

const myData = [
  {
    name:"amila",
    city:"Tangalle",
    position:"JSE"
  },
  {
    name:"mila",
    city:"angall",
    position:"KSE"
  },
  {
    name:"ila",
    city:"ngalle",
    position:"JSE"
  },
  {
    name:"la",
    city:"galle",
    position:"JSE"
  },
  {
    name:"a",
    city:"Tangalle",
    position:"JSE"
  },

]

function App() {
  return (
    <>
      <p>My</p>

      {/* Rendering the `Main` component with no props */}
      <Main />

      {/* Passing a child element (h1) inside `Main` */}
      <Main>
        <h1>Rashmi</h1>
      </Main>

      {/* Passing a manual prop `name` to `Main` */}
      <Main name="Minduli" />

      {/* Passing multiple props: `name`, `city`, `position` */}
      <Main name="Mindu" city="Kalutara" position="SSE" />

      {/* Using map to render the data */}
      {myData.map((element, index) => {
        return (
          <div> {/* Added a key prop for uniqueness */}
            <p>Amila</p>
            <p>{element.name}</p> 
            <Main key={index} name={element.name} city={element.city} position={element.position} />
          </div>
        );
      })}

      <IncDecButton/>
      <IncDecButtonConsoleLog/>
    </>
  );
}

export default App;
