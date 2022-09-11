import Header from "../header/Header";
import Form from "../form/Form";
import "./style.css";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Form />
    </div>
  );
}
