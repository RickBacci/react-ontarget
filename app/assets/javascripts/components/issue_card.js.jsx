var IssueCards = React.createClass({
  propTypes: {
    repo: React.PropTypes.object,
  },

  render: function() {
    var repo         = this.props.repo;
    var repoLabels   = repo.labels;
    var issuesList   = repo.issues.map(function(issue, index){

      var labelNameFilters = [
        { 'name': 'Backlog' },
        { 'name': 'Ready' },
        { 'name': 'Current' },
        { 'name': 'Completed' },
        { 'name': '5' },
        { 'name': '300' },
        { 'name': '600' },
        { 'name': '1500' },
        { 'name': '3000' }
      ];


      var filteredRepoLabels  = _.differenceBy(repoLabels, labelNameFilters, 'name');
      var filteredIssueLabels = _.differenceBy(issue.labels, labelNameFilters, 'name');

      var issueLabelListItems = filteredIssueLabels.map(function(label, index){
        return <li className='btn btn-xs' key={ index } style={{ backgroundColor: '#' + label.color }}>{ label.name }</li>
      });

      return (
        <li key={ index } className='draggable panel panel-default card-panel cards'>
          <div className='panel-heading'>
            <h3 className='panel-title pull-right'>#{ issue.number }</h3>
            <h3 className='panel-title text-left'>{ issue.milestone }</h3>
          </div>
          <div className='issue-dropdowns clearfix'>
            <UpdateLabelsDropdown repoLabels={ filteredRepoLabels } issue={ issue } />
            <UpdateTimeDropdown repoLabels={ repoLabels } issue={ issue } />
          </div>
          <div className='panel-body'>
            <form className='well issue-card-body'>
              <textarea defaultValue={ issue.title } rows={1} className={'form-control noscrollbars ctrl-enter'}></textarea>
              <textarea defaultValue={ issue.body } rows={5} className={'form-control noscrollbars ctrl-enter'}></textarea>
            </form>
          </div>
          <div className='issue-labels'>
            <ul className='list-unstyled'>{ issueLabelListItems }</ul>
          </div>
        </li>
      );

    });

    return  <ul className='status-list sortable list-unstyled' data-columnstatus={ status }>{ issuesList }</ul>;
  }
});
