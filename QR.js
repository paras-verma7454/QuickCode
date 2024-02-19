function generateQRCode() {
    var data = document.getElementById("inputData").value;
    var qrCodeDiv = document.getElementById("qrcode");

    if (data === '') {
      alert('Please enter some data');
    } else {
      var qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(data) + '&size=200x200';

      qrCodeDiv.innerHTML = '<img src="' + qrCodeUrl + '" alt="QR Code">';
    }
  }