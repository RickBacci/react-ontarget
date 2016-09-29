var IssueCardHeader = React.createClass({
  propTypes: {
    issueNumber: React.PropTypes.number,
    issueMilestone: React.PropTypes.string
  },

  render: function() {
    return (
      <div className='panel-heading'>
        <h3 className='panel-title pull-right'>#{ this.props.issueNumber }</h3>
        <h3 className='panel-title text-left'>{ this.props.issueMilestone }</h3>
      </div>
    );
  }
});
