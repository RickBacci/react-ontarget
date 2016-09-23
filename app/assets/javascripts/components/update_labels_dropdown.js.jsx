var UpdateLabelsDropdown = React.createClass({
  propTypes: {
    repolabels: React.PropTypes.array,
    issue: React.PropTypes.object
  },

  render: function() {

    var issue  = this.props.issue;
    var labels = this.props.repolabels.map(function(label, index){
      return (

        <div key={ index } style={{ backgroundColor: '#' + label.color }}>
          <label><input type='checkbox' defaultChecked={findIssueLabels(label.name)} value={ label.name } />{ label.name }</label>
        </div>

      );

    });

    return (

      <div className='dropdown pull-left'>
        <button className="btn btn-default dropdown-toggle" aria-expanded='true' aria-haspopup='true' data-toggle="dropdown"><strong>Labels</strong>
          <span className="caret"></span></button>
        <div className="dropdown-menu" aria-labelledby='dropdown_labels'>
          { dropDownLabels }
        </div>
      </div>
    );
  }
});
