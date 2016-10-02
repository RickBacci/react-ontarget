var IssueCardContainer = React.createClass({
  propTypes: {
    filteredRepoLabels:  React.PropTypes.array,
    filteredIssueLabels: React.PropTypes.array,
    issue:               React.PropTypes.object
  },
  getInitialState: function() {
    return {
      filteredIssueLabels: this.props.filteredIssueLabels
    };
  },
  handleUserInput: function(label, checked, filteredIssueLabels) {

    if (checked) {
      filteredIssueLabels.push(label)
    } else {
      _.pullAllBy(filteredIssueLabels, [{ 'name': label.name }], 'name');
    }
    filteredIssueLabels.push({name: this.props.issue.status, color: 'ededed'})
    filteredIssueLabels.push({name: this.props.issue.time, color: 'ededed'})

    var url       = '/update_issues/' + this.props.issue.number.toString()
    var issueData = {
      number: this.props.issue.number,
      title:  this.props.issue.title,
      body:   this.props.issue.body,
      labels: filteredIssueLabels
    };


    $.ajax({
      url: url,
      method: 'patch',
      data: {
        number: issueData.number,
        title:  issueData.title,
        body:   issueData.body,
        labels: issueData.labels
      },
      dataType: 'json',
      cache: false,
      success: function() {

        filteredIssueLabels = _.sortBy(filteredIssueLabels, ['label', 'name']);

        this.setState({
          filteredIssueLabels: filterLabels(filteredIssueLabels)
        });

        $.notify({
          message: 'Issue Label Update Successful!'
        });
      }.bind(this),
      error: function(xhr, status, err) {
        $.notify({
          message: 'Issue Label Update Failed!'
        });
        console.error(url, status, err.toString());
      }.bind(this)

    });

  },
  render: function() {
    var issue = this.props.issue;
    var filteredRepoLabels  = this.props.filteredRepoLabels;

    var liClassNames = 'draggable panel panel-default card-panel cards';

    return (
      <li className={liClassNames}>
        <IssueCardHeader
          issueNumber    = {issue.number}
          issueMilestone = {issue.milestone}
        />
        <IssueCardDropdowns
          repoLabels  = {filteredRepoLabels}
          issueLabels = {this.state.filteredIssueLabels}
          issueTime   = {issue.time}
          onUserInput = {this.handleUserInput}
        />
        <IssueCardBody
          title  = {issue.title}
          body   = {issue.body}
          number = {issue.number}
          labels = {issue.labels}
        />
        <IssueLabelsList
          labels      = {this.state.filteredIssueLabels}
        />
      </li>
    );
  }
});
