/* exported getWords */
function getWords(string) {
  if (string !== '') {
    const strArray = string.split(' ');
    return strArray;
  } else {
    return ([]);
  }
}
