import "./App.css";
import students from "/src/data.js";
import Card from "/src/Card.jsx";

function App() {
  return (
    <div className="container">
      <h1>Student Information Cards</h1>

      <div className="card-container">
        {students.map((student) => (
          <Card
            key={student.id}
            name={student.name}
            course={student.course}
            college={student.college}
            image={student.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
