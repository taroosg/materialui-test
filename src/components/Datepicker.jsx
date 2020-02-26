import 'date-fns';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const Datepicker = props => {
  // `selectedDate`にカレンダーで選択した日付が保存される
  // 初期値は本日の日付
  const [selectedDate, setSelectedDate] = useState(new Date());
  // ↓onChange時に呼ばれる関数
  const handleDateChange = date => {
    // ↓引数の`date`にカレンダーで選択した日付のデータが入るので保存
    setSelectedDate(date);
    // ↓ここで親コンポーネントからpropsで渡された「親コンポーネントのstateを更新する関数」を実行
    // ↓`date`には選択した日付のデータが入るので，日付を選択すると親コンポーネントのstateが更新される
    props.save(date);
  };
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="記念日"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
      {/* ↓stateに保存されている日付の値を表示 */}
      <p>子コンポーネントのstateの値：{JSON.stringify(selectedDate)}</p>
    </div>
  );
}
export default Datepicker;