import './App.css';
import Post from "./mycomponent/Post";
import styles from "./mycss.module.css";
import './mysass.scss';
function App() {
  const textStyle = {
    backgroundColor : "green",
    color : "white",
    margin : "10px auto",
    width : "600px"
  }
  return (
    <div className="App">
      <h1 style={{color:"red", backgroundColor:"green", margin:"auto" , width:"600px"}}>Hello</h1> {/* INline CSS */}
      <h1 style={textStyle}>Gopal</h1> {/* CSS using javascript object */}
      <h1 className="text-style">Karan</h1> {/* CSS using App.css */}
      <h1 className={styles.textStyleModule}>Where are you now?</h1> {/* CSS module*/}
      <h1 className="textStyle">Kolkata</h1> {/* CSS using SaSS*/}
      {/* <Country/> */}
      <Post/>
    </div>
  );
}

export default App;
