import "./scss/style.scss";

const App = () => {
  return (
    <ul>
      {"LOADING".split("").map((letter, index) => (
        <li key={index}>{letter}</li>
      ))}
    </ul>
  );
};

export default App;
