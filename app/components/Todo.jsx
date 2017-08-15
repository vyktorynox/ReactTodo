var React = require('react');

var Todo = React.createClass({
  render: function () {
    var {id, text} = this.props;
    return (
      <div>
        <p>ID: {id}</p>
        <p>TEXT: {text}</p>
      </div>
    )
  }
});

module.exports = Todo;
