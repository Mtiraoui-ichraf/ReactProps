import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profil/Profile";

function App() {
  const fullName = "Ichraf Mtiraoui";
  const age = 27;
  const profession = "full stack js developer";
  const style = {
    textAlign: "center",
    backgroundColor: "pink",
    padding: "30px",
    width: "80%",
    height: "30%",
    justifyContent: "center",
  };
  const handleName = () => {
    alert("You are Ichraf ?");
  };

  return (
    <div>
      <Profile
        fullName={fullName}
        age={age}
        profession={profession}
        style={style}
        handleName={handleName}
      />
    </div>
  );
}

export default App;
