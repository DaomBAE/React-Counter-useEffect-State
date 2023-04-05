const GameResult = () => {
    // | 은  null, if문과 비슷한 역할을 합니다
    const point = localStorage.getItem("point") | 0;
  
    return (
      <div className="bg-purple-300 w-full grow flex flex-col justify-end items-center text-white pb-8 shadow-pink-300 shadow-lg">
        <div className="text-8xl font-black">Up & Down</div>
        <div className="text-2xl">현재 점수 : {point}</div>
      </div>
    );
  };
  
  export default GameResult;