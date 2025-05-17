// Student.jsx
export default function Student({ name, age, isStudent }) {
  return (
    <div className="student-card">
      <div className="student-name">{name}</div>
      <div className="student-info">Age: {age}</div>
      <div className="student-info">
        Status: {isStudent ? "Currently a student" : "Not a student"}
      </div>
    </div>
  );
}
