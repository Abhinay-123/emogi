import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function creatEntry(contact){
    return <Card 
        emogi={contact.emogi}
        emoginame={contact.emoginame}
        emogidis={contact.emogidis}
    />
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{contacts.map(creatEntry)}</dl>
      
      {/* <Card
        emogi={contacts[0].emogi}
        emoginame={contacts[0].emoginame}
        emogidis={contacts[0].emogidis}
      />
      <Card
        emogi ={contacts[1].emogi}
        emoginame={contacts[1].emoginame}
        emogidis={contacts[1].emogidis}
      />
      <Card
        emogi ={contacts[2].emogi}
        emoginame={contacts[2].emoginame}
        emogidis={contacts[2].emogidis}
      /> */}
    </div>
  );
}

export default App;
