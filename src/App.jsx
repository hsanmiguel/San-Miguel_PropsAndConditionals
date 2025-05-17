import "./App.css";
import Student from "./Student.jsx";

export default function App() {
  return (
    <div className="students-container">
      <Student name="Hans Ernie V. San Miguel" age={21} isStudent={true} />
      <Student name="Larry Agad II" age={21} isStudent={true} />
      <Student name="Mick Daniel Morales" age={21} isStudent={true} />
    </div>
  );
}