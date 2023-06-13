import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './routes/Home';
import Quote from './routes/Quote';
import Calculate from './routes/Calculate';
import NoMatch from './routes/NoMatch';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="quote" element={<Quote />} />
        <Route path="calculate" element={<Calculate />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
