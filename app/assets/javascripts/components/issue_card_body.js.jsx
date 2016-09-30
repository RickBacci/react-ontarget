var IssueCardBody = React.createClass({
  propTypes: {
    title:  React.PropTypes.string,
    body:   React.PropTypes.string,
    number: React.PropTypes.number,
    labels: React.PropTypes.array
  },
  getInitialState: function() {
    var issueData = {
      issueTitle: this.props.title,
      issueBody:  this.props.body
    };
    return {
      issueData: issueData
    };
  },
  handleUserInput: function(issueTitle, issueBody) {
    var url       = '/update_issues/' + this.props.number.toString()
    var issueData = {
      number: this.props.number,
      title:  issueTitle.value,
      body:   issueBody.value,
      labels: this.props.labels
    };

    $.ajax({
      url: url,
      method: 'patch',
      data: {
        number: issueData.number,
        title:  issueData.title,
        body:   issueData.body,
        labels: issueData.labels
      },
      dataType: 'json',
      cache: false,
      success: function() {
        this.setState({
          issueTitle: issueData.title,
          issueBody:  issueData.body
        });
        $.notify({
          message: 'Issue Update Successful!'
        });
      }.bind(this),
      error: function(xhr, status, err) {
        $.notify({
          message: 'Issue Update Failed!'
        });
        console.error(url, status, err.toString());
      }.bind(this)

    });
  },
  render: function() {
    return (
      <div className='panel-body'>
        <IssueForm
          issueData  ={this.state.issueData}
          onUserInput={this.handleUserInput}
        />
      </div>
    );
  }

});
