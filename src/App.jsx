import React, { useState } from 'react';
import Datepicker from './components/Datepicker'

function App() {
  const [date, setDate] = useState(null)
  return (
    <div>
      <p>{JSON.stringify(date)}</p>
      <Datepicker save={setDate} />
    </div>
  );
}

export default App;
