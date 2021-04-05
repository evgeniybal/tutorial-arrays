var data = [
  10,
  45,
  64,
  12,
  7,
  8,
  11,
  4,
  84,
  105,
  22,
  37,
  9,
  26,
  48,
  108,
  15,
  77,
  33,
  2,
];

function showArray(items, title) {
  var resultDiv = document.getElementsByClassName('container')[0];
  const element = document.createElement('div');
  var h2 = document.createElement('h2');
  h2.innerHTML = title;
  resultDiv.appendChild(h2);
  element.classList.add('result');

  element.innerHTML = items.join(', ');
  resultDiv.appendChild(element);
  return element;
}
showArray(data, 'Initial Data');

//your code starts here

function filterNumbers(items) {
  return items;
}

showArray(filterNumbers(data), 'Filtered Data');
