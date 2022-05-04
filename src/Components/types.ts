  export interface IInputProps {
    getEntry: (data:string)=>void;
  }
  
  export interface IEntryData {
    Data: string;
    Created_On:string;
  }


  export interface IDataList {
    data : string;
    createdOn:string;
    id:number;
  }
  

  export interface IDataProps {
    listData: IDataList[];
    remove: (index: number) => void;
  } 

  export interface IModalProp {
   
  }