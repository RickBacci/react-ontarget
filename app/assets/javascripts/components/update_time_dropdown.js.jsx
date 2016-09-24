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
          <option key={ key } value={ key } name="timer-time"> { val } </option>
      );
    });

    return (
      <div className="form-group pull-right">
        <label htmlFor="timer-time">
          <select className="form-control" defaultValue={ issue.time } name="timer-time">
            { dropDownTimes }
          </select>
        </label>
      </div>
    );
  }
});
