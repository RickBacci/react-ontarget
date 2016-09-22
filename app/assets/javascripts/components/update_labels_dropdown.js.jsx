var UpdateLabelsDropdown = React.createClass({
  propTypes: {
    labels: React.PropTypes.array
  },

  render: function() {
    var labels = this.props.labels.map(function(label, index){
      return <li className='btn btn-xs' key={ index } style={{ backgroundColor: '#' + label.color }}><a href="#">{ label.name }</a></li>
    });

    return (

      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Labels
          <span className="caret"></span></button>
        <ul className="dropdown-menu">
          { labels }
        </ul>
      </div>
    );
  }
});
