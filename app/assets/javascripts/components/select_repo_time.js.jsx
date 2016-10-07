var SelectRepoTime = React.createClass({
  propTypes: {
    issue: React.PropTypes.object
  },
  getInitialState: function() {
    return {
      issueTime: this.props.issue.time
    };
  },
  handleChange: function(event) {
    var issue   = this.props.issue;
    var newTime = event.target.value;
    var label   = {name: newTime, color: 'ededed'};

    issue.labels.push(label)
    _.pullAllBy(issue.labels, [{ 'name': issue.time }], 'name');

    updateIssue(issue, 'Time', function() {
      this.setState({issueTime: newTime});
    }.bind(this));

  },
  render: function() {
    var timerValues = {
      '5': '5 seconds',
      '300': '5 minutes',
      '600': '10 minutes',
      '1500': '25 minutes',
      '3000': '50 minutes'
    };

    var dropDownTimes = _.map(timerValues, function(timeText, timeValue){
      return (
        <option key={timeValue} value={timeValue} name="timer-time">
          {timeText}
        </option>
      );
    });

    return (
      <select
        onChange  = {this.handleChange}
        className = 'form-control margin-right'
        value     = {this.state.issueTime}
        name      = 'timer-time'>
        {dropDownTimes}
      </select>
    );
  }
});
