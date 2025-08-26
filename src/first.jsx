import { memo } from "react"
import yogaapp from '/yogapp.jpg';
function Firststep(){

    return<>
        <div className="flex w-[100%] h-[100%] flex-row slideinn" >
        <div className="w-[50%] h-[90%] rounded-3xl  p-[2vmin] bg-pink-100/15 m-[2vmin]" >
            <h1 className=" text-center font-bold p-[1vmin] text-4xl" >Шаг 1</h1>
            <h2 className=" text-3xl font-bold text-center p-[1vmin]">Скачай приложение</h2>
            <p className=" text-2xl font-light text-black p-[1vmin]" >Найди Mindful Moments в App Store или Google Play и установи приложение на своё устройство</p>

        </div>
        <div className="w-[50%] h-[100%] items-center justify-center flex shadow-2xl shadow-stone-950/80"><img src={yogaapp} className="border-purple-200"  alt="Скачай приложение" ></img></div>
    </div>
    
    </>
}
export default memo(Firststep)