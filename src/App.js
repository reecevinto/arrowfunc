import "./styles.css";

export default function App() {
  return (
    <button
      onClick={() => {
        alert("You clicked me!");
      }}
    >
      Clicked me
    </button>
  );
}
