import Main from "./components/Main";  // Importing the `Main` component

function App() {
  return (
    <>
      {/* Simple text inside JSX */}
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
    </>
  );
}

export default App;
