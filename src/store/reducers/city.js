function city(state = {}, action) {

  switch (action.type) {
    case "UPDATE_CITY":
      return action.cityid;

    default:
      return state;
  }
}

export default city;
