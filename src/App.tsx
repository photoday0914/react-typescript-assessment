import React, { useEffect, useState } from 'react';
import './App.css';
import { AutoComplete } from "./AutoComplete";
// import data from "./data.json";

interface IData {
  name: string;
  code: string;
}

function App() {
  const [data, setData] = useState<IData[]>([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/independent?status=true&fields=name,flag").then(res => res.json()).then( data =>{
      // console.log(data);
      let buffer:IData[] = [];
      for (let element of data) {
        // console.log(element)
        buffer.push({
          name: element.name.common,
          code: element.flag
        })
      }
      setData(buffer);
    })
  })
  return (
    <div className="App">
      <h2>Auto Complete-React-Typescript</h2>

      <AutoComplete
        inputStyle={{ backgroundColor: "White" }}
        optionsStyle={{ backgroundColor: "LemonChiffon" }}
        data={data}
      />
    </div>
  );
}

export default App;
