import { memo, useEffect, useState } from "react"
import Firststep from './first.jsx'
import Secondstep from './second.jsx'
import Thirdstep from './third.jsx'
import Forthstep from './forth.jsx'
function Steps() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState(<Firststep />); // Инициализация JSX-компонентом

  // Обновление text при изменении count
  useEffect(() => {
    if (count === 1) {
      setText(<Firststep/>);
    } else if (count === 2) {
      setText(<Secondstep/>);
    } else if (count === 3) {
      setText(<Thirdstep/>);
    } else if (count === 4) {
      setText(<Forthstep/>);
    }
  }, [count]);

  // Вывод в консоль для отладки


  return (
    <div className="w-[80%] mx-auto overflow-hidden relative mt-[5vh] rounded-2xl border-1 border-purple-200 h-[60%] bg-white/15 backdrop-blur-2xl">
     <div className="absolute bottom-0 w-[38vw] flex flex-row-reverse justify-between p-[2vmin]"> 
      <button
        className="font-medium  p-[1vmin] rounded-xl  bg-linear-30 hover:scale-105 from-purple-400 via-pink-300 to-purple-200 active:scale-90 shadow-2xl shadow-stone-800 active:shadow-stone-950 transition-all duration-200 "
        onClick={() => {
          if (count < 4) setCount(count + 1);
        }} 
      >
      {count === 4 ? 'Ну что, идем скачивать?':`Следущий шаг` }
     
      </button>
     { count === 1 ?  <button
        className="font-medium slideout p-[1vmin] border-b-1 border-b-purple-300 bg-black/35 rounded-xl  hover:scale-105 active:scale-90 hover:border-b-2 transition-all duration-200 to-purple-200 ">
       <span className="text-transparent bg-clip-text bg-linear-30 from-purple-400 via-pink-300 to-purple-200" >Прошлый шаг</span>
     
      </button>: <button
        className="font-medium slideinn p-[1vmin] border-b-1 border-b-purple-300 bg-black/35 rounded-xl  hover:scale-105 active:scale-90 hover:border-b-2 transition-all duration-200 to-purple-200 "
        onClick={() => {
          if (count > 1 ) setCount(count - 1);
        }}
      >
       <span className="text-transparent bg-clip-text bg-linear-30 from-purple-400 via-pink-300 to-purple-200" >Прошлый шаг</span>
     
      </button>}
      </div>
      {text} {/* Рендеринг текущего компонента */}
    </div>
  );
}

export default memo(Steps);