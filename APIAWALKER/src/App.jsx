import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import CardDetail from './components/CardDetail';

const App = () => {
  return (
    <div className="container">
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/:id" element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App

