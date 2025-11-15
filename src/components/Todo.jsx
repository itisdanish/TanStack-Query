import React from 'react';
import { useGetTodosQuery } from '../features/todoApi';

export default function Todo() {
  const { data: todos, isLoading } = useGetTodosQuery(undefined, {
    pollingInterval: 5000,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className='max-w-xl mx-auto p-5'>
      <h1 className='text-3xl font-bold mb-4'>Tasks</h1>

      <ul className='space-y-3'>
        {todos.map((t) => (
          <li
            key={t.id}
            className='flex items-center justify-between p-4 border rounded-xl shadow-sm bg-white'
          >
            <div className='flex items-center gap-3'>
              <input type='checkbox' checked={t.completed} readOnly />
              <span className={t.completed ? 'line-through text-gray-500' : ''}>
                {t.title}
              </span>
            </div>

            <span className='text-sm text-gray-400'>#{t.id}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
