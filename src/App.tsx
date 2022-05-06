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
      createdOn: new Date().toLocaleTimeString(),
      id:Date.now(),
      dataShow:false
    }
    entryData.push(note);
    setEntryData([...entryData])
  }

  const RemoveItem = (index:number) => {
     entryData.splice(index,1)
     setEntryData([...entryData])
  }

  const UpdateDataList = (data: IDataList) => {
    console.log(data)
    const temp = (entryData as Array<IDataList>).map(item=>{
      if(item.id===data.id){
        return data;
      }
      return item;
    })
    setEntryData(temp);
  }


  return (
    <div className="App">
      <Input getEntry={getEntry} />
      <Data listData={entryData} remove={RemoveItem} updateData={UpdateDataList} />
    </div>
  );
}

export default App;
