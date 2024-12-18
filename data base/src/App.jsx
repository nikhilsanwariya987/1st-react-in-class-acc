import React from "react";
import Card from "./utilit/compontes/Card";
import contacts from "./utilit/Data";

function App() {
  return (
    <>
    <div>
     <Card contacts = {contacts}/>
    </div>
    </>
  );
}

export default App;
