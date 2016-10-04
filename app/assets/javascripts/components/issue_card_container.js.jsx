var IssueCardContainer = React.createClass({
  propTypes: {
    repo:  React.PropTypes.object,
    issue: React.PropTypes.object
  },
  getInitialState: function() {
    return {
      issueLabels: this.props.issue.labels
    };
  },
  handleUserInput: function(label, checked, issueLabels) {
    var issue = this.props.issue;

    if (checked) {
      issue.labels.push(label)
    } else {
      _.pullAllBy(issue.labels, [{ 'name': label.name }], 'name');
    }

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
          issueLabels: issueLabels
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
    var issue        = this.props.issue;
    var repoLabels   = this.props.repo.labels;

    var ulClassNames = 'status-list sortable list-unstyled';
    var liClassNames = 'draggable panel panel-default card-panel cards';

    return (
      <ul className={ulClassNames} data-columnstatus={issue.status}>
        <li className={liClassNames}>
          <IssueCardHeader
            issueNumber    = {issue.number}
            issueMilestone = {issue.milestone}
          />
          <IssueCardDropdowns
            repoLabels  = {repoLabels}
            issueLabels = {this.state.issueLabels}
            issue       = {issue}
            onUserInput = {this.handleUserInput}
          />
          <IssueCardBody
            title  = {issue.title}
            body   = {issue.body}
            number = {issue.number}
            labels = {issue.labels}
          />
          <IssueLabelsList
            labels = {this.state.issueLabels}
          />
        </li>
      </ul>
    );
  }
});
