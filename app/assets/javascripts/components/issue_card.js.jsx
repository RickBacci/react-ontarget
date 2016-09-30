var IssueCards = React.createClass({
  propTypes: {
    repo: React.PropTypes.object,
  },

  render: function() {
    var repoLabels         = this.props.repo.labels;

    var issueCardsList     = this.props.repo.issues.map(function(issue, index){
      var filteredRepoLabels  = filterLabels(repoLabels);
      var filteredIssueLabels = filterLabels(issue.labels);

      return (
        <li
          key       = {index}
          className = 'draggable panel panel-default card-panel cards'>

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

    });

    return  (
      <ul
        className         = 'status-list sortable list-unstyled'
        data-columnstatus = {status}>

        {issueCardsList}
      </ul>
    );
  }
});
