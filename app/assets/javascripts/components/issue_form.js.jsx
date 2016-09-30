var IssueForm = React.createClass({
  propTypes: {
    issueData: React.PropTypes.object,
  },
  handleChange: function() {
    this.props.onUserInput(
      this.refs.issueTitleInput,
      this.refs.issueBodyInput
    );
  },
  render: function() {
    return (
      <form className='well issue-card-body'>
        <textarea
          defaultValue={this.props.issueData.issueTitle}
          rows        ={1}
          className   ='form-control noscrollbars ctrl-enter'
          ref         ='issueTitleInput'
          onBlur    ={this.handleChange}
        />
        <textarea
          defaultValue={this.props.issueData.issueBody}
          rows={5}
          className='form-control noscrollbars ctrl-enter'
          ref='issueBodyInput'
          onBlur={this.handleChange}
        />
      </form>
    );
  }
});
