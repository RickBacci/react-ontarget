var IssueCards = React.createClass({
  propTypes: {
    repo: React.PropTypes.object,
  },

  render: function() {
    var repo   = this.props.repo.table;

    var issues = repo.issues.map(function(issue) {
      return issue.table;
    });

    var issuesList = issues.map(function(issue, index){

      var milestone;

      if (issue.milestone !== undefined && issue.milestone !== null) {
        milestone = issue.milestone.title;
      } else {
        milestone = 'No milestone';
      }

      var repoLabels = repo.labels.map(function(label) {
        return label.table;
      });

      var issueLabels = issue.labels.map(function(label, index){
        label = label.table.table.table;
        return <li className='btn btn-xs' key={ index } style={{ backgroundColor: '#' + label.color }}>{ label.name }</li>
      });

      return (
        <li key={ index } className='draggable panel panel-default card-panel cards' data-number={issue.number}>
          <div className='panel-heading'>
            <h3 className='panel-title pull-right'>#{ issue.number }</h3>
            <h3 className='panel-title text-left'>{ milestone }</h3>
          </div>
          <div className='panel-body'>
            <UpdateLabelsDropdown repoLabels={ repoLabels } issue={ issue } />
            <form className='well issue-card-body'>
              <textarea defaultValue={ issue.title } rows={1} className={'form-control noscrollbars ctrl-enter title-' + issue.number}></textarea>
              <textarea defaultValue={ issue.body } rows={5} className={'form-control noscrollbars ctrl-enter body-' + issue.number}></textarea>
            </form>
          </div>
          <ul className='clearfix list-unstyled'>{ issueLabels }</ul>
        </li>
      );

    });

    return  <ul className='status-list sortable list-unstyled' data-columnstatus={ status }>{ issuesList }</ul>;
  }
});
