import Todo from "../todo/Todo";
import "./style.css";
export default function List({ formValue, setFormValue }) {


  const workList = formValue.filter((todo) => todo.isDone === false);
  const doneList = formValue.filter((todo) => todo.isDone === true);
  
  console.log(workList)
  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {workList.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              desc={todo.desc}
              isDone={todo.isDone}
              setFormValue={setFormValue}
              formValue={formValue}
            />
          );
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper done">
        {doneList.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              desc={todo.desc}
              isDone={todo.isDone}
              setFormValue={setFormValue}
              formValue={formValue}
            />
          );
        })}
      </div>
    </div>
  );
}
