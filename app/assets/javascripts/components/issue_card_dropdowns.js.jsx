var IssueCardDropdowns = React.createClass({
  propTypes: {
    repoLabels:  React.PropTypes.array,
    issueLabels: React.PropTypes.array,
    issueTime:   React.PropTypes.string
  },
  render: function() {
    return (
      <div className='issue-dropdowns clearfix'>
        <form>
          <UpdateLabelsDropdown
            repoLabels  = {this.props.repoLabels}
            issueLabels = {this.props.issueLabels}
            onUserInput = {this.props.onUserInput}
          />
          <UpdateTimeDropdown issueTime={ this.props.issueTime } />
        </form>
      </div>
    );
  }

});
