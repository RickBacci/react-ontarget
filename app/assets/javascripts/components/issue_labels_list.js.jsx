var IssueLabelsList = React.createClass({
  propTypes: {
    labels: React.PropTypes.array
  },
  render: function() {
    var issueLabelListItems = this.props.labels.map(function(label, index){
      if (label.display) {
        var style = {backgroundColor: '#' + label.color};
      } else {
        var style = {display: 'none'};
      }

      return (
        <li className='btn btn-xs' key={index} style={style}>
          {label.name}
        </li>
      );
    });

    return (
      <div className='issue-labels'>
        <ul className='list-unstyled'>{issueLabelListItems}</ul>
      </div>
    );
  }
});
