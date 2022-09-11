import "./style.css";

export default function Todo({ title, desc, id, isDone, formValue, setFormValue }) {
  const setWorkIsDone = () => {
    const newFormValue = [...formValue];
    newFormValue.forEach((item,index)=>{
      if (item.id === id){
        newFormValue[index].isDone = true;
      }
    })
    setFormValue(newFormValue);
  }
  const setCancelWorkIsDone = () => {
    const newFormValue = [...formValue];
    newFormValue.forEach((item,index)=>{
      if (item.id === id){
        newFormValue[index].isDone = false;
      }
    })
    setFormValue(newFormValue);
  }
  // console.log(title, id, isDone)
  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title">{title}</h2>
        <div>{desc}</div>
      </div>
      <div className="button-set">
        <button className="todo-delete-button button">삭제하기</button>
        {isDone ? (
          <button
            className="todo-complete-button button"
            onClick={setCancelWorkIsDone}
          >
            취소
          </button>
          ) : (
            <button
              className="todo-complete-button button"
              onClick={setWorkIsDone}
            >
              완료
            </button>
          )
        }
      </div>
    </div>
  );
}
