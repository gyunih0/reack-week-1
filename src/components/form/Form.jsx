import { useState } from "react";
import List from "../list/List";
import "./style.css";

export default function Form() {
  const [formValue, setFormValue] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const addTodo = () => {
    setFormValue([...formValue, { title: title, desc: desc, id: formValue.length + 1, isDone: false }]);
    setTitle("");
    setDesc("");
  };


  return (
    <>
      <form className="add-form">
        <div className="input-group">
          <label className="form-label" htmlFor="title">
            제목
          </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="add-input input-body"
            value={title}
          ></input>
          <label className="form-label" htmlFor="desc">
            내용
          </label>
          <input
            type="text"
            name="desc"
            id="desc"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="add-input"
            value={desc}
          ></input>
          <button className="add-button" type="button" onClick={addTodo}>
            추가하기
          </button>
        </div>
      </form>
      <List formValue={formValue} setFormValue={setFormValue} />
    </>
  );
}
