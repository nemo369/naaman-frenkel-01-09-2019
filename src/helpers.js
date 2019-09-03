export const apiKey = `aoP6ImdPDEKAJlaPXXABvJvnpyOt0AUR`;

export function loadStorage(key) {
  var val = localStorage.getItem(key);
  return val ? JSON.parse(val) : null;
}

export function saveStorage(key, val) {
  localStorage[key] = JSON.stringify(val);
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function recudeForcastRes(data) {
  let res = [];
  data.data.DailyForecasts.forEach(forecast => {
    res.push({
      weatherText: forecast.Day.IconPhrase,
      min: forecast.Temperature.Minimum.Value,
      time: forecast.EpochDate,
      max: forecast.Temperature.Maximum.Value,
      temperature: forecast.Temperature.Minimum.Value,
      unit: forecast.Temperature.Minimum.Unit,
      icon: forecast.Day.Icon
    });
  });
  return res;
}

export function timeConverter(timestamp, format = null) {
  var a = new Date(timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fry", "Sat"];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var res;
  switch (format) {
    case "date":
      res = date + " " + month + " " + year;
      break;
    case "day":
      res = days[a.getDay()];
      break;
    default:
      res =
        date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
      break;
  }
  return res;
}

export function setBgImage(condition = "") {
  switch (condition) {
    case "Sunny":
      return `https://images.unsplash.com/photo-1513907404652-d138942b8859?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`;
    case "Mostly cloudy":
      return `https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80`;
    case "Partly cloudy":
      return `https://images.unsplash.com/photo-1502623547075-299b5ba76c53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`;
    case "Mostly clear":
      return `https://images.unsplash.com/photo-1493364391862-bb90969a4cc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`;
    case "":
      return ``;
    default:
      return `https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80`;
  }
}


export function debounce(func, wait, immediate){
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}