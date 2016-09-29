var UpdateTimeDropdown = React.createClass({
  propTypes: {
    issueTime:  React.PropTypes.string
  },

  render: function() {
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
          <select className="form-control margin-right" defaultValue={ this.props.issueTime } name="timer-time">
            { dropDownTimes }
          </select>
        </label>
      </div>
    );
  }
});
