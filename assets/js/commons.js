$.cookie = function (name, value) {
  let cookies = document.cookie.split(";"),
      tripz = cookies.filter(e => ~e.indexOf("tripz=")),
      obj = tripz.length == 1 ? JSON.parse(tripz[0].split("=")[1]) : {};

  if ( value == null ) {
    return obj[name];
  }
  else {
    obj[name] = value;
    document.cookie = "tripz=" + JSON.stringify(obj);
  }
}