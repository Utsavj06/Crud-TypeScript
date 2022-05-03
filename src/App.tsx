import React , {useEffect, useState} from 'react';
import './App.css';
import Data from './Components/Data';
import Input from './Components/Input';
import { IDataList } from './Components/types';

function App() {
  
  const [entryData , setEntryData] = useState<IDataList[]>([]);

  const getEntry = (data:string) => {
    //console.log(entry)
    const note = {
      data: data,
      createdOn: Date.now().toString(),
      id:Date.now()
    }
    entryData.push(note);
    setEntryData([...entryData])
  }

  const RemoveItem = (index:number) => {
     entryData.splice(index,1)
     setEntryData([...entryData])
  }

  return (
    <div className="App">
      <Input getEntry={getEntry} />
      <Data listData={entryData} delete={RemoveItem} />
    </div>
  );
}

export default App;
