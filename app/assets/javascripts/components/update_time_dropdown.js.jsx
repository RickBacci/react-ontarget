var UpdateTimeDropdown = React.createClass({
  propTypes: {
    issue:  React.PropTypes.object
  },
  render: function() {
    return (
      <div className="form-group pull-right">
        <label htmlFor="timer-time">
          <SelectRepoTime
            issue={this.props.issue}
          />
        </label>
      </div>
    );
  }
});
