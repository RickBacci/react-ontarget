var IssueCardContainer = React.createClass({
  propTypes: {
    filteredRepoLabels:  React.PropTypes.array,
    filteredIssueLabels: React.PropTypes.array,
    issue:               React.PropTypes.object
  },

  render: function() {
    var issue = this.props.issue;
    var filteredRepoLabels  = this.props.filteredRepoLabels;
    var filteredIssueLabels = this.props.filteredIssueLabels;

    var liClassNames = 'draggable panel panel-default card-panel cards';

    return (
        <li className={liClassNames}>
          <IssueCardHeader
            issueNumber    = {issue.number}
            issueMilestone = {issue.milestone}
          />
          <IssueCardDropdowns
            repoLabels  = {filteredRepoLabels}
            issueLabels = {filteredIssueLabels}
            issueTime   = {issue.time}
          />
          <IssueCardBody
            title  = {issue.title}
            body   = {issue.body}
            number = {issue.number}
            labels = {issue.labels}
          />
          <IssueLabelsList
            labels = {filteredIssueLabels}
          />
        </li>
    );
  }
});
