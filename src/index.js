import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

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
  return <img src="my-image.jpeg" alt="my image" className="avatar" />;
}

function Intro() {
  return (
    <div className="data">
      <h1>Ahmed Elbehary</h1>
      <p>i'm a .NET full-stack developer, since 2017.</p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill skillDetails={skill} key={skill.skill} />
      ))}
    </ul>
  );
}

function Skill({ skillDetails }) {
  return (
    <li className="skill" style={{ backgroundColor: skillDetails.color }}>
      {skillDetails.skill}
      {skillDetails.level === "beginner" && <span>👶</span>}
      {skillDetails.level === "intermediate" && <span>👍</span>}
      {skillDetails.level === "advanced" && <span>💪</span>}
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
