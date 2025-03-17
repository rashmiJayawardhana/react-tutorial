import Main from "./components/Main";  // Importing the `Main` component
import IncDecButton from "./components/useStateExamples/IncDecButton";
import IncDecButtonConsoleLog from "./components/useEffectExamples/IncDecButtonConsoleLog";
import MyData from "./data/MyData";   // Importing default export
import { MyDataAnotherExport } from "./data/MyDataAnotherExport";  // Importing named export
import Tutorial from "./components/useStateExamples/Tutorial";
import String from "./components/useStateExamples/String";
import Array from "./components/useStateExamples/Array";
import DocumentTitle from "./components/useEffectExamples/DocumentTitle";

// Local array data
const myData = [
  { name:"amila", city:"Tangalle", position:"JSE" },
  { name:"mila", city:"angall", position:"KSE" },
  { name:"ila", city:"ngalle", position:"JSE" },
  { name:"la", city:"galle", position:"JSE" },
  { name:"a", city:"Tangalle", position:"JSE" }
];

// Using map to generate JSX elements from MyDataAnotherExport
const DataBlock = MyDataAnotherExport.map((element) => {
  return (
    <div key={element.id}> 
      <Main name={element.name} city={element.city} position={element.position} />
    </div>
  );
});

// Functional component that renders data using map
const FunctionalComponentBlock = () => {
  return(
    <>
      {MyDataAnotherExport?.map((element) => {  // Optional chaining ensures data exists, //to check if data available or not available, use "?"
        return (
          <div key={element.id}> {/* Unique key prop for React optimization */}
            <Main name={element.name} city={element.city} position={element.position} />
          </div>
        );
      })}
    </>
  )
}

function App() {
  // Another way of using map inside a function component
  const DataBlock2 = MyDataAnotherExport.map((element) => {
    return (
      <div key={element.id}> 
        <Main name={element.name} city={element.city} position={element.position} />
      </div>
    );
  });

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

      {/* Rendering local array data using map */}
      {myData.map((element, index) => {
        return (
          <div key={index}> {/* Unique key using index */}
            <p>Amila</p>
            <p>{element.name}</p> 
            <Main name={element.name} city={element.city} position={element.position} />
          </div>
        );
      })}

      {/* Rendering data from MyData (default export) */}
      {MyData.map((element) => {
        return (
          <div key={element.id}> {/* Unique key */}
            <Main name={element.name} city={element.city} position={element.position} />
          </div>
        );
      })}

      {/* Rendering data from MyDataAnotherExport (named export) */}
      {MyDataAnotherExport.map((element) => {
        return (
          <div key={element.id}> {/* Unique key */}
            <Main name={element.name} city={element.city} position={element.position} />
          </div>
        );
      })}
      {DataBlock}  {/* Data outside the App component */}
      {DataBlock2} {/* Data inside the App component */}
      <FunctionalComponentBlock/> {/* Functional component rendering */}

      <IncDecButton/>
      <IncDecButtonConsoleLog/>
      <Tutorial/>
      <String/>
      <Array/>
      <DocumentTitle/>
    </>
  );
}

export default App;
