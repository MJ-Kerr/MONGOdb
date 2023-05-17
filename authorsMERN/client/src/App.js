import './App.css';
import { Routes, Route } from 'react-router-dom'
import Table from './components/Table';
import Form from './components/Form';

function App() {
  return (
    <fieldset className='container'>
      <h1>📚📚📚Authors📚📚📚</h1>
      {/*Theatre Stage */}
      <Routes>
        {/* Main Route */}
        <Route path='/form' element={<Form />} />
        <Route path='/' element={<Table />} />


      </Routes>
    </fieldset>
  );
}

export default App;
