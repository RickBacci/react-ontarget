var IssueCardBody = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    body: React.PropTypes.string
  },

  render: function() {
    return (
      <div className='panel-body'>
        <IssueForm
          issueData  ={this.state.issueData}
          onUserInput={this.handleUserInput}
        />
      </div>
    );
  }
});
