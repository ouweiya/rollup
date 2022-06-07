import { useState } from 'react';
import Button from '@mui/material/Button';

const App = () => {
  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState('A');

  return (
    <div>
      <p>{count}</p>
      <p>{txt}</p>
      <p>
        <button onClick={() => setCount(v => (v += 1))}>Click</button>
      </p>
      <input type="text" value={txt} onChange={e => setTxt(e.target.value)} />
      <Button variant="contained">Contained</Button>
    </div>
  );
};

export default App;
