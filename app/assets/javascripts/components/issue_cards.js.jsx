var IssueCards = React.createClass({
  propTypes: {
    repo: React.PropTypes.object,
  },

  render: function() {
    var repoLabels          = this.props.repo.labels;
    var repoIssues          = this.props.repo.issues;

    var issueCardsList      = repoIssues.map(function(issue, index){

      return (
        <IssueCardContainer
          key                 = {index}
          issue               = {issue}
          repoLabels  = {repoLabels}
          issueLabels = {issue.labels}
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
