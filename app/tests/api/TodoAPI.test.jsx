var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('filterTodos', () =>{
    var todos = [
      {
        id: 1,
        text: 'Some text here',
        completed: true
      },
      {
        id: 2,
        text: 'Other text here',
        completed: false
      },
      {
        id: 3,
        text: 'Some more text here',
        completed: true
      },
    ];

    it('should return all items if showCompleted is true', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filterTodos.length).toBe(3)
    });

    it('should return non-completed todosx if showCompleted is false', () => {
      var filterTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filterTodos.length).toBe(1)
    });

    it('should sort by completed status', () => {
      var filtered = TodoAPI.filterTodos(todos, true, '')

      expect(filtered[0].completed).toBe(false);
    });

    it('should return all todos when searchText is empty', () => {
      var filtered = TodoAPI.filterTodos(todos, true, '')

      expect(filtered[0].completed).toBe(false);
    });

    it('should return matched todos when searchText is provided', () => {
      var filtered = TodoAPI.filterTodos(todos, true, 'more')

      expect(filtered.length).toBe(1);
    });
  });
});
