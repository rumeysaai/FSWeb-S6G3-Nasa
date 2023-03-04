import React from "react";

const DatePicker = (props) => {

   
    return (
        <div className="date-picker">
        <form onSubmit={(e) => props.setDate(e.target.value)}>
          <label htmlFor="datePicker">Doğum gününde gökyüzü nasıldı? </label><br></br>
          <input
            onChange={(e) => props.setDate(e.target.value)}
            type="date"
            name="datePicker"
            value={props.date}
            style={{
                backgroundColor: "aliceblue",
                height: "30px",
                borderRadius: "8px",
                fontSize: "18px",
                padding: "3px 40px"
              }}
          />
        </form>
      </div>
    )
}
export default DatePicker;
