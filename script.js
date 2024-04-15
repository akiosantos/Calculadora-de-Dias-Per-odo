document.getElementById('calculate-btn').addEventListener('click', function() {
  var startDate = new Date(document.getElementById('start-date').value);
  var endDate = new Date(document.getElementById('end-date').value);

  if (startDate && endDate && startDate <= endDate) {
    var differenceInTime = endDate.getTime() - startDate.getTime();
    var differenceInDays = differenceInTime / (1000 * 3600 * 24);

    document.getElementById('result').textContent = 'O período entre as datas é de ' + differenceInDays + ' dias.';
  } else {
    document.getElementById('result').textContent = 'Por favor, insira datas válidas.';
  }
});