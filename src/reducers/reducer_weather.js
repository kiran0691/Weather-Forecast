export default function(state=[], action) {
  console.log('Action:',action);
  switch(action.type){
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
  }
  return state;
}
