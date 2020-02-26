import 'date-fns';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const Datepicker = props => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = date => {
    setSelectedDate(date);
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
      {/* <p>{JSON.stringify(selectedDate)}</p> */}
    </div>
  );
}
export default Datepicker;