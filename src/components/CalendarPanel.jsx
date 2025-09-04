import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function DateCalendarValue() {
  const [value, setValue] = React.useState(dayjs()); // Current date by default

  return (
    <div >
      <div className="backdrop-blur-md bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-6">
        <h2 className="text-center text-white text-xl font-semibold mb-4">
          📅 Select a Date
        </h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={value}
            onChange={(newValue) => setValue(newValue)}
            defaultValue={dayjs()} // current date selected
            minDate={dayjs()} // disable past dates
            sx={{
              color: "white",
              "& .MuiPickersDay-root": {
                color: "white",
                fontWeight: "500",
              },
              "& .MuiPickersDay-root.Mui-selected": {
                backgroundColor: "#3b82f6 !important", // Tailwind blue-500
                color: "white",
                borderRadius: "50%",
              },
              "& .MuiPickersDay-root:hover": {
                backgroundColor: "rgba(59,130,246,0.3)", // hover effect
              },
              "& .MuiPickersDay-root.Mui-disabled": {
                color: "rgba(255,255,255,0.3)", // past dates greyed out
              },
              "& .MuiPickersCalendarHeader-label": {
                fontSize: "1.1rem",
                fontWeight: "600",
                color: "white",
              },
              "& .MuiDayCalendar-weekDayLabel": {
                color: "white", // 👈 Weekday labels white
                fontWeight: "600",
              },
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}
