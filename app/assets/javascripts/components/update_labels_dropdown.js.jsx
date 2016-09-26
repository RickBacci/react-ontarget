var UpdateLabelsDropdown = React.createClass({
  propTypes: {
    repoLabels: React.PropTypes.array,
    issue: React.PropTypes.object
  },

  render: function() {

    var issue            = this.props.issue;
    var repoLabels       = this.props.repoLabels;

    var issueLabels      = issue.labels;

    var issueLabelNames  = issueLabels.map(function(issue) {
      return issue.name;
    });

    function findIssueLabels(labelname) {
      return _.includes(issueLabelNames, labelname)
    };

    var dropDownLabels = repoLabels.map(function(label, index){
      return (

        <div className='label-box-dropdown btn btn-xs' key={ index } style={{ backgroundColor: '#' + label.color }}>
          <input type='checkbox' defaultChecked={findIssueLabels(label.name)} value={ label.name } />
          <label className='dropdown-labels'>{ label.name }</label>
        </div>

      );

    });

    return (

      <div className='dropdown pull-left'>
        <button className="btn btn-default dropdown-toggle time-select" aria-expanded='true' aria-haspopup='true' data-toggle="dropdown"><strong className='pad-right'>Labels</strong>
          <span className="caret"></span></button>
        <div className="dropdown-menu" aria-labelledby='dropdown_labels'>
          { dropDownLabels }
        </div>
      </div>
    );
  }
});
