var IssueCardContainer = React.createClass({
  propTypes: {
    filteredRepoLabels:  React.PropTypes.array,
    filteredIssueLabels: React.PropTypes.array,
    issue:               React.PropTypes.object
  },
  getInitialState: function() {
    return {
      filteredIssueLabels: this.props.filteredIssueLabels
    };
  },
  render: function() {
    var issue = this.props.issue;
    var filteredRepoLabels  = this.props.filteredRepoLabels;

    var liClassNames = 'draggable panel panel-default card-panel cards';

    return (
      <li className={liClassNames}>
        <IssueCardHeader
          issueNumber    = {issue.number}
          issueMilestone = {issue.milestone}
        />
        <IssueCardDropdowns
          repoLabels  = {filteredRepoLabels}
          issueLabels = {this.state.filteredIssueLabels}
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
          labels      = {this.state.filteredIssueLabels}
        />
      </li>
    );
  }
});
