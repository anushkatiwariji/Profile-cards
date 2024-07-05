import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="profile2.jpeg" alt="Sophie Beckett" />;
}

function Intro() {
  return (
    <div>
      <h1>Sophie Beckett</h1>
      <p>
        As a passionate Full-stack Web Developer, I specialize in React.js and
        Node.js, and I'm continually expanding my skills by learning AWS.
        Currently, I'm gaining invaluable experience as an SDE intern at Amazon.
        My journey in tech is driven by a love for building efficient, scalable
        web applications and a commitment to continuous learning and growth in
        this dynamic field.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="React" color="purple" />
      <Skill name="NodeJs" color="blue" />
      <Skill name="MySQL" color="orange" />
      <Skill name="Django" color="yellow" />
      <Skill name="MongoDB" color="green" />
      <Skill name="C++" color="pink" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.name}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
