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
    dataShow:boolean;
  }
  

  export interface IDataProps {
    listData: IDataList[];
    remove: (index: number) => void;
    updateData: (data: IDataList) => void;
  } 

  export interface IModalProp {
    cancel: (arg1: boolean) => void;
    updateData: (arg: IDataList) => void;
    item: IDataList;
  }