import React from "react";

const DatePicker = (props) => {

   
    return (
        <div className="date-picker">
        <form onSubmit={(e) => props.setDate(e.target.value)}>
          <label htmlFor="datePicker">Doğum gününde gökyüzü nasıldı? </label>
          <input
            onChange={(e) => props.setDate(e.target.value)}
            type="date"
            name="datePicker"
            value={props.date}
          />
        </form>
      </div>
    )
}
export default DatePicker;
