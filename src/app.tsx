import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";

export function App() {
  const [count, setCount] = useState(0);

  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const day = today.getDate();

  const [selectedDay, setSelectedDay] = useState(0);

  // month is zero-indexed, and day 0 will return last day of previous month
  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", {
      month: "long",
    });
  }

  const daysInMonthArray = Array.from(
    { length: daysInMonth(month, year) },
    (_, index) => index + 1,
  );

  function openDayView(day, month, year) {
    setSelectedDay(day);
    //alert("OPEN DAY VIEW: " + day)
  }

  return (
    <>
      <h2>Welcome to ProtoTypeZone</h2>
      <div className="calendarApp--screen-day-a">
        <h3>
          Today{" "}
          {today.toLocaleDateString("default", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h3>
      </div>

      <br />

      <div className="calendarApp--screen-month-a">
        <div class="xxx">
          <h3>Welcome to {getMonthName(month)} View</h3>
          <div>
            <select class="month-select">
              <option>Month</option>
            </select>

            <select class="year-select">
              <option>Year</option>
            </select>
          </div>
        </div>

        <div class="day-in-month-wrap">
          {daysInMonthArray.map((d) => (
            <div
              class="day-in-month"
              onClick={() => openDayView(d, month, year)}
            >
              {d}
            </div>
          ))}
        </div>
      </div>

      <br />

      <div className="calendarApp--screen-day-b">
        <h3>Plan and Review your days</h3>
        {selectedDay ? (
          <div>
            {selectedDay}
            <textarea className="day-planner" />
            <button>Save</button>
          </div>
        ) : (
          <p>no day was selected...</p>
        )}
      </div>
      
      <br />
      
      <div className="advent-lifetime-view">
          
          <AdventLifetimeView />
      </div>
    </>
  );
}


function AdventLifetimeView(props) {
  const [yearBorn, setYearBorn] = useState(1995);  // could be exact date
  const [lifetimeExpectancy, setLifetimeExpectancy] = useState(67); // default could be average expectancies. Should be a range or a function.
  const currentYear = 2023
  
  // with these 3 variables we should be able to calculate current year in user's life
  // and display how many years are left. 
  
  return (
    <>
    <div>
      <div className="xxx">
        <h3>Advent Lifetime View</h3>
        <div>
          <input type="number" min="1900" max="2024" value="{yearBorn}" />
          <input type="number" min="1" max="125" value="{lifetimeExpectancy}" />
        </div>
      </div>
    </div>
    
    <div className="advent-lifetime-overview">
      {Array.from({ length: lifetimeExpectancy }).map((_, i) => (
        <div className="year-square">
           {i+1}
        </div>
      ))}
    </div>
      
    </>
  )
  
}