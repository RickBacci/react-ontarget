var IssueCardBody = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    body: React.PropTypes.string
  },

  render: function() {
    return (
      <div className='panel-body'>
        <form className='well issue-card-body'>
          <textarea defaultValue={ this.props.title } rows={ 1 } className='form-control noscrollbars ctrl-enter'></textarea>
          <textarea defaultValue={ this.props.body } rows={ 5 } className='form-control noscrollbars ctrl-enter'></textarea>
        </form>
      </div>
    );
  }
});
