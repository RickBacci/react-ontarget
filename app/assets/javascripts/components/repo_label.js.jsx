var RepoLabel = React.createClass({
  propTypes: {
    label:       React.PropTypes.object,
    issueLabels: React.PropTypes.array
  },
  handleChange: function() {
    this.props.onUserInput(
      this.props.label,
      this.refs.issueLabelState.checked,
      this.props.issueLabels
    );
  },
  render: function() {
    var label         = this.props.label;
    var divClassNames = 'label-box-dropdown btn btn-xs';

    var issueLabelNames = this.props.issueLabels.map(function(issue) {
      return issue.name;
    });

    function findIssueLabels(labelname) {
      return _.includes(issueLabelNames, labelname)
    };

    var divStyle = {backgroundColor: '#' + label.color}
    return (
      <div className={divClassNames} style={divStyle}>
        <input
          type           = 'checkbox'
          defaultChecked = {findIssueLabels(label.name)}
          value          = {label.name}
          ref            = 'issueLabelState'
          onChange       = {this.handleChange}
        />
        <label className='dropdown-labels'>
          {label.name}
        </label>
      </div>
    );
  }
});
