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
});
