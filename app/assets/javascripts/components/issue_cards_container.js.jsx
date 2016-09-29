var IssueCardsContainer = React.createClass({
  propTypes: {
    repo: React.PropTypes.object
  },

  render: function() {
    return (
      <div>
        <div>Repo: {this.props.repo}</div>
      </div>
    );
  }
});
