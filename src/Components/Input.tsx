import React, {useState , useEffect , FC} from 'react'
import Styles from "./Input.module.css"
//import { commonStyles } from './styles'  ==> import Styles of Material UI
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import {IInputProps } from './types';

const Input:FC<IInputProps> = props => {
  //const commonCss=commonStyles();  ==>  to get CSS from Material UI
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
    //<div className={`${commonCss.Container}`}>        ==> Use of Material UI CSS
    <div className={Styles.Container}>
        <div className={Styles.Container_Input}>
             <input type='text' placeholder='...' value={entry} onChange={dataEntry} />
             <AddCircleTwoToneIcon style={{paddingTop:"1px", paddingRight:"10px", fontSize:"25px" , color:'red'}} onClick={handleAddData} />
        </div>
    </div>
  )
}

export default Input


// NOTE : There is File Called style.tsx having CSS of Material