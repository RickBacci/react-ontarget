var IssueCards = React.createClass({
  propTypes: {
    issues: React.PropTypes.array,
    status: React.PropTypes.string,
    repolabels: React.PropTypes.array
  },

  render: function() {
    var status     = this.props.status;
    var issues     = this.props.issues;
    var repolabels = this.props.repolabels;

    var issuesList = issues.map(function(issue, index){
      var milestone;

      if (issue.milestone !== null) {
        milestone = issue.milestone.title;
      } else {
        milestone = 'No milestone';
      }

      var labels = issue.labels.map(function(label, index){
        return <li className='btn btn-xs' key={ index } style={{ backgroundColor: '#' + label.color }}>{ label.name }</li>
      });

      return (
        <li key={ index } className='draggable panel panel-default card-panel cards' data-number={issue.number}>
          <div className='panel-heading'>
            <h3 className='panel-title pull-right'>#{ issue.number }</h3>
            <h3 className='panel-title text-left'>{ milestone }</h3>
          </div>
          <div className='panel-body'>
            <UpdateLabelsDropdown repolabels={ repolabels } issue={ issue } />
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
