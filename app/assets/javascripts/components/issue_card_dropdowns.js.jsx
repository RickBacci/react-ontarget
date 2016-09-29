var IssueCardDropdowns = React.createClass({
  propTypes: {
    repoLabels: React.PropTypes.array,
    issueLabels: React.PropTypes.array,
    issueTime: React.PropTypes.string
  },

  render: function() {
    return (
      <div className='issue-dropdowns clearfix'>
        <UpdateLabelsDropdown repoLabels={ this.props.repoLabels } issueLabels={ this.props.issueLabels } />
        <UpdateTimeDropdown issueTime={ this.props.issueTime } />
      </div>
    );
  }
});
