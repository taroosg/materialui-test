import React, { useState } from 'react';
import Datepicker from './components/Datepicker'

function App() {
  // ここで日付の値を管理
  // 初期値は本日の日付
  const [date, setDate] = useState(new Date())
  return (
    <div>
      {/* ↓`save`という名前で日付を更新する関数を渡す */}
      <Datepicker save={setDate} />
      {/* ↓stateに保存されている日付の値を表示 */}
      <p>親コンポーネントのstateの値：{JSON.stringify(date)}</p>
    </div>
  );
}

export default App;
