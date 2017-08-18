var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function () {
    var {id, text, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var ts = createdAt;
      if (completed) {
        message = 'Completed ';
        ts = completedAt;
      }
      return message + moment.unix(ts).format('MMMM Do, YYYY @ hh:mm A');
    };
    return (
      <div className={todoClassName} onClick={() => {
        this.props.onToggle(id); }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
});

module.exports = Todo;
