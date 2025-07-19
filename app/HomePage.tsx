import React from 'react';
import { useTodos } from './useTodos';

export function HomePage() {
  const { data, isFetching, error } = useTodos();

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured</div>;
  }

  const todos = data || [];

  return (
    <div>
      <h4>todos</h4>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.desc}</li>;
        })}
      </ul>
    </div>
  );
}
