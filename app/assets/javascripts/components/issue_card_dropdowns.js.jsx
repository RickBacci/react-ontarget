var IssueCardDropdowns = React.createClass({
  propTypes: {
    repoLabels:  React.PropTypes.array,
    issueLabels: React.PropTypes.array,
    issue:       React.PropTypes.object
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
          <UpdateTimeDropdown
            issue = {this.props.issue}
          />
        </form>
      </div>
    );
  }

});
