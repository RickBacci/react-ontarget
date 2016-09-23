function setColumnHeight() {

  var largestHeight = 0;
  var columns =  $('.status-column');

  $.each( columns, function (i, column) {
    if (column.clientHeight >= largestHeight) {
      largestHeight = column.clientHeight;
    }
  });

  $('.status-column').height(largestHeight);
}

