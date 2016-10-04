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

    updateIssue(issue, 'Label')

    issueLabels = _.sortBy(issue.labels, ['label', 'name']);

    this.setState({ issueLabels: issueLabels });
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
