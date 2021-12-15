import './todos.module.css';
import { Todo } from '@kiwi-practice/data';

/* eslint-disable-next-line */
export interface TodosProps {}

export function Todos( props: { todos: Todo[] }) {
  return (
    <ul>
      { props.todos.map((t) => {
        return <li className={'todo'} key={t.title}>
          { t.title }
        </li>
      }) }
    </ul>
  );
}

export default Todos;
