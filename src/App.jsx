import "./App.css";
import students from "/src/data";
import Card from "/src/Card";

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