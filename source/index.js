export default (obj, key) => {
  if (typeof key !== "undefined" && key) {
    return key.split(".").every(function(x) {
      if(typeof obj != "object" || obj === null || !x in obj ) {
        return false;
      } else {
        obj = obj[x];
        return true;
      }
    });
  }
  else{
    if (typeof obj !== "undefined" && obj !== null) {
      return true;
    }
    else{
      return false;
    }
  }
}
