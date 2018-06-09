$.cookie = function (name, value) {
  let cookies = document.cookie.split(";"),
      tripz = cookies.filter(e => ~e.indexOf("tripz=")),
      obj = tripz.length == 1 ? JSON.parse(tripz[0].split("=")[1]) : {};

  if ( value == null ) {
    return obj[name];
  }
  else {
    obj[name] = value;
    let d = new Date();
    d.setTime(d.getTime() + (10*24*60*60*1000));
    document.cookie = "tripz=" + JSON.stringify(obj);
  }
}