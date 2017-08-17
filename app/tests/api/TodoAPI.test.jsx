var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    beforeEach(() => {
      localStorage.removeItem('todos');
    });

    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actual = JSON.parse(localStorage.getItem('todos'));

      expect(actual).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = {a: 'b'};

      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      var actual = TodoAPI.getTodos();

      expect(actual).toEqual([]);
    });

    it('should return todos if valid array in localStorage',() => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));

      var actual = TodoAPI.getTodos();

      expect(actual).toEqual(todos);
    });
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
