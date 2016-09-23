var UpdateTimeDropdown = React.createClass({
  propTypes: {
    repoLabels: React.PropTypes.array,
    issue:      React.PropTypes.object
  },

  render: function() {

    var issue            = this.props.issue;
    var repoLabels       = this.props.repoLabels;

    var issueLabels      = issue.labels;

    var issueLabelNames  = issueLabels.map(function(issue) {
      return issue.name;
    });

    var timerValues = {
         '5': '5 seconds',
       '300': '5 minutes',
       '600': '10 minutes',
      '1500': '25 minutes',
      '3000': '50 minutes'
    };


    var dropDownTimes = _.map(timerValues, function(val, key){
      return (
        <div key={ key }>
          <label><input type='radio' value={ key } />{ val }</label>
        </div>
      );
    });

    return (
      <div className='dropdown pull-right'>
        <button className="btn btn-default dropdown-toggle" aria-expanded='true' aria-haspopup='true' data-toggle="dropdown"><strong>Times</strong>
          <span className="caret"></span></button>
        <div className="dropdown-menu" aria-labelledby='dropdown_times'>
          { dropDownTimes }
        </div>
      </div>
    );
  }
});
