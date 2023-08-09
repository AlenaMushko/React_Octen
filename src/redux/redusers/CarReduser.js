
const initialtate={
 cars:[],
 updateCar:{},
 error:null,
 isLoading:false,
 isCarUpdate:false,
}

export const carActionType={
 SET_ISLOADING:'SET_ISLOADING',
 GET_CARS:'GET_CARS',
 GET_CAR_BY_ID:'GET_CAR_BY_ID',
 SET_CAR:'SET_CAR',
 SET_ERROR:'SET_ERROR',
 REMOVE_CAR_BY_ID:'REMOVE_CAR_BY_ID',
 SET_CARS_BY_ID:'SET_CARS_BY_ID',
 SET_UPDATE_CAR:'SET_UPDATE_CAR',
 SET_IS_CAR_UPDATE:'SET_IS_CAR_UPDATE',
}
const carReduser = (state=initialtate, action)=>{
    switch (action.type){
     case carActionType.SET_ISLOADING:
      return {
       ...state,
       isLoading: action.payload,
      }
     case carActionType.SET_IS_CAR_UPDATE:
      return {
       ...state,
       isCarUpdate: action.payload,
      }
     case carActionType.SET_ERROR:
      return {
       ...state,
       error: action.payload,
      }
     case carActionType.GET_CARS:
      return {
       ...state,
       cars:action.payload,
       isLoading: false,
      }
     case carActionType.GET_CAR_BY_ID:
      return {
       ...state,
       updateCar:action.payload,
       isLoading: false,
      }
     case carActionType.REMOVE_CAR_BY_ID:
      return {
       ...state,
       cars: state.cars.filter(car => car.id !== action.payload),
      }


     case carActionType.SET_CAR:
      return {
       ...state,
       cars: [...state.cars, action.payload],
       isLoading: false,
       isCarUpdate:false,
      }


     case carActionType.SET_UPDATE_CAR:
      return {
       ...state,
       cars: state.cars.map(car =>
           car.id === action.payload.id ? action.payload.data : car
       ),
       isLoading: false,
       isCarUpdate:false,
      }

     default:
      return state
    }
 };

export default carReduser;
