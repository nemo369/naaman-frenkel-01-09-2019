export function addTofavs(favs) {
  return {
    type: "ADD_TO_FAVS",
    favs
  };
}

export function removeFromfavs(i) {
  return {
    type: "REMOVE_FROM_FAVS",
    i
  };
}

export function updateCity(cityid, location) {
  return {
    type: "UPDATE_CITY",
    cityid,
    location
  };
}
export function toglleNightMode(isNightMode) {
  return {
    type: "TOGLLE_NIGHT_MODE",
    isNightMode
  };
}
