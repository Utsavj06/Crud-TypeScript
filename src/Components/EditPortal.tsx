import React, {FC} from 'react'
import ReactDOM from 'react-dom'
import { IModalProp } from './types'
import mestyles from './EditPortal.module.css'

const EditPortal:FC<IModalProp> = (props) => {
  

    return ReactDOM.createPortal(
        <div className={mestyles.modal} >E</div>,
        document.getElementById('portal-root') as HTMLElement
      )
    }
export default EditPortal