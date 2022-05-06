import React, {useState, FC} from 'react'
import Styles from "./Input.module.css"
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import {IInputProps } from './types';

const Input:FC<IInputProps> = props => {
  const {getEntry} = props;

  const [entry , setEntry]=useState<string>("")

  const dataEntry = (event:React.ChangeEvent<{value:string}>) => {
    setEntry(event.target.value)
  }

  const handleAddData = () => {
    getEntry(entry);
    setEntry("");
  }

  return (
    <div className={Styles.Container}>
        <div className={Styles.Container_Input}>
             <input type='text' placeholder='...' value={entry} onChange={dataEntry} />
             <AddCircleTwoToneIcon style={{paddingTop:"1px", paddingRight:"10px", fontSize:"25px" , color:'red'}} onClick={handleAddData} />
        </div>
    </div>
  )
}

export default Input

