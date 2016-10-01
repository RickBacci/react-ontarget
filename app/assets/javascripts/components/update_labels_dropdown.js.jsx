var UpdateLabelsDropdown = React.createClass({
  propTypes: {
    repoLabels: React.PropTypes.array,
    issueLabels: React.PropTypes.array
  },
  render: function() {


    var dropDownLabels = this.props.repoLabels.map(function(label, index){
      return (
        <RepoLabel
          key         = {index}
          label       = {label}
          issueLabels = {issueLabels}
          onUserInput = {onUserInput}
        />
      );

    });

    return (

      <div className='dropdown pull-left'>
        <button className="btn btn-default dropdown-toggle time-select" aria-expanded='true' aria-haspopup='true' data-toggle="dropdown"><strong className='pad-right'>Labels</strong>
          <span className="caret"></span></button>
        <div className="dropdown-menu" aria-labelledby='dropdown_labels'>
          { dropDownLabels }
        </div>
      </div>
    );
  }

});
