module.exports = function toReadable (number) {
  let simple = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
  'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dozens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (number < 20) {
    return simple[number];
  } else if (number < 100 && number % 10 === 0) {
    return dozens[number / 10];
  } else if (number < 100) {
    return `${dozens[Math.floor(number / 10)]} ${simple[number % 10]}`
  } else if (number >= 100 && number % 100 === 0) {
    return `${simple[number / 100]} hundred`
  } else {
    let hundred = `${simple[Math.floor(number / 100)]} hundred`;
    number = number % 100;
    if (number < 20) {
        return `${hundred} ${simple[number]}`;
      } else if (number % 10 === 0) {
        return `${hundred} ${dozens[number / 10]}`;
      } else {
        return `${hundred} ${dozens[Math.floor(number / 10)]} ${simple[number % 10]}`
      }
  }
}
