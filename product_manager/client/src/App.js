import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import DisplayAll from './components/DisplayAll';
import Form from './components/Form'

function App() {
  return (
    <fieldset className='container'>
      <h1>Product Manager:</h1>
      {/*Theatre Stage */}
      <Routes>
        {/* Main Route */}
        <Route path='/form' element={<Form />} />
        <Route path='/' element={<DisplayAll />} />


      </Routes>
    </fieldset>
  );
}

export default App;
