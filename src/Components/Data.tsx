import React , { FC, useState } from 'react'
import myStyles from './Data.module.css'
import RemoveCircleOutlineSharpIcon from '@mui/icons-material/RemoveCircleOutlineSharp';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { IDataList, IDataProps } from './types';
import EditPortal from './EditPortal'

const Data: FC<IDataProps> = (props) => {
  const {listData, remove, updateData} = props;
  const [ modalVisibility , setModalVisibilty] = useState(false);
  const [itemData, setItemData]= useState<IDataList>(listData[0]);

  const handleEdit = (item:IDataList) => {
    setItemData(item)
    setModalVisibilty(true)
  }


  return (
    <div className={myStyles.Container}>
      {listData.length===0?<h1>Nothing to Show</h1>:
          (listData as Array<IDataList>).map((item,index:number)=>{
          return ( 
            <div className={myStyles.Container_color}>
            <div key={item.id} className={myStyles.Container_Contents} >     
            <h2 style={{paddingLeft:"30px"}}>{item.data}</h2>
            <div className={myStyles.Icons}>
              <EditOutlinedIcon onClick={()=>handleEdit(item)} />
              <RemoveCircleOutlineSharpIcon onClick={()=>remove(index)} />
            </div>
            </div>
           <div>Created On {item.createdOn} </div>
          </div> 
          )
      }) 
    }
    {!modalVisibility?"": <EditPortal cancel={setModalVisibilty} updateData={updateData} item={itemData} />}
   </div>   
  )
}

export default Data