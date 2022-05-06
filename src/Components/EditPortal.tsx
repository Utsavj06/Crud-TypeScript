import React, {FC, useState} from 'react'
import ReactDOM from 'react-dom'
import { IModalProp } from './types'
import styles from './EditPortal.module.css'
import Button from '@mui/material/Button';
import IosShareTwoToneIcon from '@mui/icons-material/IosShareTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';

const EditPortal:FC<IModalProp> = (props) => {
  
  const {cancel, updateData, item} = props;

  const [editedData , setEditData] = useState(item.data);

  const enteredData = (event:any) => {
    setEditData(event.target.value);
  }

  const handleUpdate = () => {
    const note = {...item, data: editedData};
    updateData(note);
    cancel(false);
  }

    return ReactDOM.createPortal(
        <div className={styles.modal} >
          <div className={styles.modal_content}>
            <div className={styles.cross} onClick={()=>cancel(false)}>X</div>
            <div className={styles.input}>
                <input type="text" value={editedData} onChange={enteredData} />
            </div>
            <div style={{display:"flex", marginTop:"20px", gap:"10px", justifyContent:"end", marginRight:"15px"}}>
                <IosShareTwoToneIcon onClick={()=>cancel(false)} style={{cursor:"pointer"}} />
                <CheckBoxTwoToneIcon onClick={handleUpdate} style={{cursor:"pointer"}} />
            </div>
          </div>
        </div>,
        document.getElementById('portal-root') as HTMLElement
      )
    }
export default EditPortal