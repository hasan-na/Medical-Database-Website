function find_HID() {
    let HID = document.getElementById('HID').value;
    let param = 'HID='+ HID;
    send_request(param);
  }

function send_request(param) {
    $.ajax({
      method: 'GET',
      url: 'http://127.0.0.1:8000/Patient' + param,
      beforeSend: function() {
        console.log('before send');
      },
      success: function(result) {
        update_table(result);
        console.log('after send');
      },
      error: function() {
        console.log('error');
      }
    });
  }


  function update_table(data) {
    let row;
    let all_rows = '';

    Object.keys(data).forEach(key => {
      elem = data[key];
      row = '<tr><td>' + elem['HID'] + '</td>' + '<td>' + elem['Age'] + '</td>' + '<td>' + elem['Name'] + '</td>' + '<td>' + elem['Sex'] + '</td>' + '<td>' + elem['Birth_date'] + '</td>' +  '<td>' + elem['WID'] + '</td>' + '<td>' + elem['IID'] + '</td>' + '</tr>';
      all_rows = all_rows + row;
    });

    $('#myTable tbody').html(all_rows);
  }