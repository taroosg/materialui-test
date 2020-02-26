import React, { useState } from 'react';
import Datepicker from './components/Datepicker'

function App() {
  const [date, setDate] = useState(null)
  return (
    <div>
      <Datepicker save={setDate} />
      <p>{JSON.stringify(date)}</p>
    </div>
  );
}

export default App;
