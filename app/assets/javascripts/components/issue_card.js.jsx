var IssueCards = React.createClass({
  propTypes: {
    issues: React.PropTypes.array,
    status: React.PropTypes.string
  },

  render: function() {
    var status     = this.props.status;
    var issues     = this.props.issues;

    var issuesList = issues.map(function(issue, index){
      var milestone;

      if (issue.milestone !== null) {
        milestone = issue.milestone.title;
      } else {
        milestone = 'No milestone';
      }

      var labels = issue.labels.map(function(label, index){
        return <li key={ index } style={{ display: 'inline' }}>
          <div className='btn btn-xs card-labels' style={{ backgroundColor: '#' + label.color }}>
            { label.name }
          </div>
        </li>
      });

      return (
        <li key={ index } className='draggable panel panel-default card-panel cards' data-number={issue.number}>
          <div className='panel-heading'>
            <h3 className='panel-title pull-right'>#{ issue.number }</h3>
            <h3 className='panel-title text-left'>{ milestone }</h3>
          </div>
          <div className='panel-body'>
            <form className='well issue-card-body'>
              <textarea defaultValue={ issue.title } rows={1} className={'form-control noscrollbars ctrl-enter title-' + issue.number}></textarea>
              <textarea defaultValue={ issue.body } rows={5} className={'form-control noscrollbars ctrl-enter body-' + issue.number}></textarea>
            </form>
          </div>
          <ul className='clearfix list-unstyled'>{ labels }</ul>
        </li>
      );

    });

    return  <ul className='status-list sortable list-unstyled' data-columnstatus={ status }>{ issuesList }</ul>;
  }
});
