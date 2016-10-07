function updateIssue(issue, updated, success) {
  $.ajax({
    url: '/update_issues/' + issue.number.toString()
,
    method: 'patch',
    data: {
      number: issue.number,
      title:  issue.title,
      body:   issue.body,
      labels: issue.labels
    },
    dataType: 'json',
    cache: false,
    success: function() {

      $.notify({
        message: 'Issue ' + updated + ' Update Successful!'
      });

      (success || Function())()

    },
    error: function(xhr, status, err) {
      $.notify({
        message: 'Issue Label Update Failed!'
      });
      console.error(url, status, err.toString());
    }

  });

}

