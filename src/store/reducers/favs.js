function favs(state = [], action) {
  const updatedState = [...state ];

  switch (action.type) {
    case "ADD_TO_FAVS":
        updatedState.push(action.favs);
      localStorage.setItem("cities-favs", JSON.stringify(updatedState));
      return [
        ...updatedState
      ];

    case "REMOVE_FROM_FAVS":
        
      let i = updatedState.findIndex(
        city => city.cityid === action.i.cityid
      );
      // const newState =[
      //   ...state.slice(0,i),
      //   ...state.slice(i+1),
      // ];
      updatedState.splice(i, 1);
      localStorage.setItem("cities-favs", JSON.stringify(updatedState));
      return [
        ...updatedState
      ];
    default:
      return state;
  }
}

export default favs;
