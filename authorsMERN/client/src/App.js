import './App.css';
import { Routes, Route } from 'react-router-dom'
import Table from './components/Table';
import Form from './components/Form';
import Update from './components/Update';

function App() {
  return (
    <fieldset className='container'>
      <h1>📚📚📚Authors📚📚📚</h1>
      {/*Theatre Stage */}
      <Routes>
        {/* Main Route */}
        <Route path='/form' element={<Form />} />
        <Route path='/' element={<Table />} />
        <Route path='/update/:id' element={<Update />} />

      </Routes>
    </fieldset>
  );
}

export default App;
