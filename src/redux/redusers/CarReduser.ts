
export interface Car {
 id?:number,
 brand:string,
 price:number,
 year:number
}

export interface IState {
 cars: Car[],
 selectedCar: Car | null,
 error: string | null,
 isLoading: boolean,
 isCarUpdate: boolean,
}

const initialtate:IState={
 cars:[],
 selectedCar:null,
 error:null,
 isLoading:false,
 isCarUpdate:false,
}

export enum carActionType {
 SET_ISLOADING = 'SET_ISLOADING',
 SET_ERROR = 'SET_ERROR',
 SET_IS_CAR_UPDATE = 'SET_IS_CAR_UPDATE',

 GET_CARS = 'GET_CARS',
 SELECT_CAR = 'SELECT_CAR',
 CREATE_CAR = 'CREATE_CAR',
 REMOVE_CAR_BY_ID = 'REMOVE_CAR_BY_ID',
 UPDATE_CAR = 'UPDATE_CAR',
 RESET_UPDATED_CAR =  'RESET_UPDATED_CAR',
}

const carReduser = (state=initialtate, action:any):IState=>{
    switch (action.type){
     case carActionType.SET_ISLOADING:
      return {
       ...state,
       isLoading: action.payload,
      };
     case carActionType.SET_IS_CAR_UPDATE:
      return {
       ...state,
       isCarUpdate: action.payload,
      };
     case carActionType.SET_ERROR:
      return {
       ...state,
       error: action.payload,
      };
     case carActionType.GET_CARS:
      return {
       ...state,
       cars:action.payload,
       isLoading: false,
      }
     case carActionType.SELECT_CAR:
      return {
       ...state,
       selectedCar: action.payload,
      }
     case carActionType.REMOVE_CAR_BY_ID:
      return {
       ...state,
       cars: state.cars.filter(car => car.id !== action.payload),
      }
     case carActionType.CREATE_CAR:
      return {
       ...state,
       cars: [...state.cars, action.payload],
       isLoading: false,
       isCarUpdate:false,
      }
     case carActionType.UPDATE_CAR:
      return {
       ...state,
       cars: state.cars.map(car =>
           car.id === action.payload.id ? action.payload.data : car
       ),
       isLoading: false,
       isCarUpdate:false,
      }
     case carActionType.RESET_UPDATED_CAR:
      return {
       ...state,
       selectedCar: null,
      }
     default:
      return state
    }
 };

export default carReduser;
