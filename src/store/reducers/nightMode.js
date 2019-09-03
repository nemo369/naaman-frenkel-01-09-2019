function nightMode(state = {}, action) {
  switch (action.type) {
    case "TOGLLE_NIGHT_MODE":
      localStorage.setItem("night-mode", JSON.stringify(!state));
      return !state;

    default:
      return state;
  }
}

export default nightMode;
