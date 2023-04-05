import { useEffect } from "react";
import GameBoard from "./components/GameBoard";
import GameResault from "./components/GameResult";

//시작할때  point 초기값을 0으로 아예 설정
function App() {
  useEffect(()=>{
    let savedPoint = localStorage.getItem("point");
    if (!savedPoint) {
      localStorage.setItem("point",0)
    }
  },[]);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <GameResault/>
      <GameBoard />  
    </div>
  );
}

export default App;
