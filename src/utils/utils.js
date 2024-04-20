export function capitaliseWordArray(arr) {
  const newArr = arr.map((a) => {
    if (arr.length === 1) {
      return a;
    } else if (arr[0] === a) {
      return a;
    }
    return " " + a;
  });
  return (arr.length > 0 ? "Diets: " : "") + newArr;
}
export function s(str, val) {
  if (val.length > 0) {
    const rtr = str + val;
    const rep = rtr.replace(/ /g, "%20");

    return rep;
  }
  return "";
}
export function n(str, val) {
  if (val.length > 0) {
    return str + parseInt(val);
  }
  return "";
}
