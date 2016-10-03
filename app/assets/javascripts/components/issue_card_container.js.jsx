var IssueCardContainer = React.createClass({
  propTypes: {
    repoLabels:  React.PropTypes.array,
    issueLabels: React.PropTypes.array,
    issue:               React.PropTypes.object
  },
  getInitialState: function() {
    return {
      issueLabels: this.props.issueLabels
    };
  },
  handleUserInput: function(label, checked, issueLabels) {

    if (checked) {
      issueLabels.push(label)
    } else {
      _.pullAllBy(issueLabels, [{ 'name': label.name }], 'name');
    }
    issueLabels.push({name: this.props.issue.status, color: 'ededed'})
    issueLabels.push({name: this.props.issue.time, color: 'ededed'})

    var url       = '/update_issues/' + this.props.issue.number.toString()
    var issueData = {
      number: this.props.issue.number,
      title:  this.props.issue.title,
      body:   this.props.issue.body,
      labels: issueLabels
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

        issueLabels = _.sortBy(issueLabels, ['label', 'name']);

        this.setState({
          issueLabels: filterLabels(issueLabels)
        });

        $.notify({
          message: 'Issue Label Update Successful!'
        });
      }.bind(this),
      error: function(xhr, status, err) {
        $.notify({
          message: 'Issue Label Update Failed!'
        });
        console.error(url, status, err.toString());
      }.bind(this)

    });

  },
  render: function() {
    var issue = this.props.issue;
    var repoLabels  = this.props.repoLabels;

    var liClassNames = 'draggable panel panel-default card-panel cards';

    return (
      <li className={liClassNames}>
        <IssueCardHeader
          issueNumber    = {issue.number}
          issueMilestone = {issue.milestone}
        />
        <IssueCardDropdowns
          repoLabels  = {repoLabels}
          issueLabels = {this.state.issueLabels}
          issueTime   = {issue.time}
          onUserInput = {this.handleUserInput}
        />
        <IssueCardBody
          title  = {issue.title}
          body   = {issue.body}
          number = {issue.number}
          labels = {issue.labels}
        />
        <IssueLabelsList
          labels      = {this.state.issueLabels}
        />
      </li>
    );
  }
});
