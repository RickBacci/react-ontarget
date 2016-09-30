var IssueCards = React.createClass({
  propTypes: {
    repo: React.PropTypes.object,
  },

  render: function() {
    var repoLabels          = this.props.repo.labels;
    var repoIssues          = this.props.repo.issues;
    var filteredRepoLabels  = filterLabels(repoLabels);

    var issueCardsList      = repoIssues.map(function(issue, index){
      var filteredIssueLabels = filterLabels(issue.labels);

      return (
        <IssueCardContainer
          key                 = {index}
          issue               = {issue}
          filteredRepoLabels  = {filteredRepoLabels}
          filteredIssueLabels = {filteredIssueLabels}
        />
      );

    });

    var ulClassNames = 'status-list sortable list-unstyled';

    return  (
      <ul className={ulClassNames} data-columnstatus={status}>
        {issueCardsList}
      </ul>
    );
  }

});
