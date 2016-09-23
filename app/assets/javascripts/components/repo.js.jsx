var Repo = React.createClass({
  propTypes: {
    repo: React.PropTypes.object
  },

  render: function() {
    repo = this.props.repo;
    return (
      <div>
        <div>Repo: {repo.name}</div>
      </div>
    );
  }
});
