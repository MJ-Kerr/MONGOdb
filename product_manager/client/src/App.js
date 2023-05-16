import './App.css';

function App() {
  return (
    <fieldset class='container'>
      <h1>Product Manager:</h1>
      <form action="submit">
        <label>Product:</label>
        <input type="text" />
        <label>Description:</label>
        <input type="textArea" />
        <label>Price:</label>
        <input type="number" />
        <button>Create Product</button>
      </form>
    </fieldset>
  );
}

export default App;
