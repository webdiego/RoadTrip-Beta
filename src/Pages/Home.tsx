import { useState, useEffect } from "react";
import {ITrip} from '../Interface/Interface'

function Home() {
  //LocalStorage Data
  const LocalCar= +localStorage.getItem("Petrol")!;
  //Budget for the trip
  const [total, setTotal] = useState<number>(0);
  //Insert expense
  const [category, setCategory] = useState<string>("Petrol");
  const [expense, setExpense] = useState<number>(0);
  
   let Trip ={
     Petrol:LocalCar,
     Food:0,
     Sleep:0,
     Activity:0,
     Others:0,

   }
  
  const [trip,setTrip]=useState<ITrip>(Trip)   
  //Function add expense
   const AddExpense= (expense:number , category: string) => {   
    setTrip( {...trip, [`${category}`]: trip[`${category}`] + expense})
    console.log(trip)
  };

  //Reset Local Storage
  const ResetLocalStorage = () => {
    localStorage.clear();
  };
  useEffect(() => {
    localStorage.setItem("Petrol", JSON.stringify(trip.Petrol));
  }, [trip]);

  return (
    <div
      style={{display: "flex",alignItems: "center",justifyContent: "center" ,flexDirection: "column",
      }}
    >
      <button onClick={() => localStorage.clear()}>Clean Storage</button>
      <h2>budget</h2>
      <input type="number" value={total} onChange={(e) => setTotal(e.target.valueAsNumber)} />{" "}
      {total}
      <div className="Add" style={{ border: "2px solid #842020", margin: "2rem" }}>
        <h2>Add</h2>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="Car">Car</option>
          <option value="Food">Food</option>
          <option value="Sleep">Sleep</option>
          <option value="Other">Other</option>
        </select>

        <input type="number" onChange={(e) => setExpense(e.target.valueAsNumber)} />
        <button onClick={() => AddExpense(expense,category)}>Add</button>
      </div>

      
      <div className="overview" style={{ border: "2px solid #8de634", margin: "2rem" }}>
        <h1>Overview</h1>
        <p>Petrol {trip.Petrol}</p>
     
      </div>
    </div>
  );
}

export default Home;
