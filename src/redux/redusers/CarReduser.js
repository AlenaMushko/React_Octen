
const initialtate={
 cars:[],
 error:null,
 isLoading:false,
}

export const carActionType={
 SET_ISLOADING:'SET_ISLOADING',
 SET_CARS:'SET_CARS',
 SET_ERROR:'SET_ERROR',
}
const carReduser = (state=initialtate, action)=>{
    switch (action.type){
     case carActionType.SET_ISLOADING:
      return {
       ...state,
       isLoading: action.payload,
      }
     case carActionType.SET_CARS:
      return {
       ...state,
       cars:action.payload,
       isLoading: false,
      }
     case carActionType.SET_ERROR:
      return {
       ...state,
       error: action.payload,
      }

     default:
      return state
    }
 };

export default carReduser;
