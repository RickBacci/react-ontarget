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
        <li key={ index } className='draggable panel panel-default card-panel cards'>
          <IssueCardHeader issueNumber={ issue.number } issueMilestone= { issue.milestone } />
          <div className='issue-dropdowns clearfix'>
            <UpdateLabelsDropdown repoLabels={ filteredRepoLabels } issue={ issue } />
            <UpdateTimeDropdown repoLabels={ repoLabels } issue={ issue } />
          </div>
          <div className='panel-body'>
            <form className='well issue-card-body'>
              <textarea defaultValue={ issue.title } rows={ 1 } className='form-control noscrollbars ctrl-enter'></textarea>
              <textarea defaultValue={ issue.body } rows={ 5 } className='form-control noscrollbars ctrl-enter'></textarea>
            </form>
          </div>
          </div>
          <IssueLabelsList labels={ filteredIssueLabels } />
        </li>
      );

    });

    return  <ul className='status-list sortable list-unstyled' data-columnstatus={ status }>{ issuesList }</ul>;
  }
});
