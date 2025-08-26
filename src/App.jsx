import { useEffect,useRef, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FeatureSection from './features';
import Steps from './steps';
import { useNavigate } from 'react-router-dom';

function App() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);  
    const [isOpenHeader,setOpenHeader] = useState(true)
    const [isMouseOver,setMouseOver] = useState(false)
    const [isDarkerHeader,setDarkerHeader] = useState(false)
    const sectionRef = useRef(null); // Для секции #hs
  const featuresRef = useRef(null); // Для секции #features
  const anotherRef = useRef(null); // Для секции "Как это работает?"
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Feature Section is now visible!');
            setOpenHeader(false)
            setDarkerHeader(false)
          }
        });
      },
      {threshold: 0.15} // Trigger when 30% of the section is visible
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(featuresRef.current);
       
      }
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
           setDarkerHeader(true)
         
          }
        });
      },
      {threshold: 0.55} // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(anotherRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(anotherRef.current);
     
      }
    };
  }, []);

   const scrollToHome = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    featuresRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    anotherRef.current.scrollIntoView({ behavior: 'smooth' });
  };
    useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);
 
return<>
{windowWidth > 1200 ? '':<div className='fixed top-0 z-15 left-0 w-full h-full bg-black flex items-center justify-center text-white text-2xl font-extralight' >
  Пожалуйста используйте компьютер для просмотра сайта</div>}
<div id='header' className={`fixed ${isOpenHeader ? ' bg-black/30  shadow-2xl shadow-neutral-200/10 slideDown':'slideUp transition-all'} ${isDarkerHeader ? 'bg-black':''}  w-[100vw] ${isMouseOver ? 'scale-y-90  top-[-1.2vh] duration-200 transition-all':'top-0 transition-all'} flex flex-row items-center  h-[9vh]   z-10`} >
{isOpenHeader ? <div className='flex flex-row justify-evenly w-auto ml-[10vw] ' >
    <button className='button-header' onClick={scrollToHome} >Главная</button>
    <button className='button-header' onClick={scrollToFeatures}  >Особенности</button>
    <button className='button-header'onClick={scrollToHowItWorks} >Как это работает?</button>
        <button  className={`rounded-full  bg-linear-60 from-purple-400 via-cyan-100  to-pink-300 absolute overflow-hidden text-center backdrop-blur-xl hover:scale-105 active:scale-95 active:shadow-purple-400 hover:shadow-2xl hover:shadow-purple-300 transition-all right-[4vw] ${isMouseOver ? 'scale-y-115 duration-200':''} font-extrabold`} ><h1 className='p-[2vmin]' >Скачать</h1></button></div>  : ''}
</div>
<button onMouseEnter={()=> setMouseOver(!isMouseOver)} onMouseLeave={()=> setMouseOver(!isMouseOver)} 
onClick= {()=> setOpenHeader(!isOpenHeader)} 
className={` ml-[2%] bg-linear-60 text-transparent bg-clip-text from-purple-300 via-cyan-50 to-pink-50 text-5xl
 font-extrabold ${ isOpenHeader ? '': 'animate-pulse'}  top-[2vh] tracking-tighter fixed absolute z-11 hover:scale-105
  hover:animate-none hover:cursor-pointer active:scale-95`} >MM</button>


<div id='hs'  ref={sectionRef}  className='relative  flex w-[100w] h-[100vh]   bg-amber-300' >
    <div className='absolute font-light top-[34vh] left-[3vw] bg-linear-60 text-transparent bg-clip-text from-purple-400 via-cyan-100 to-pink-300'>
    <h1 id='hs-h1' className=' text-9xl font-normal tracking-tighter' >MindfulMoments</h1>
    <h2 id='hs-h2' className='text-white text-4xl  ' >Твой путь к спокойствию</h2>
    <h3 id='hs-h3' className=' mt-[20vw] bg-linear-60 text-transparent bg-clip-text from-purple-200 via-cyan-100 to-pink-300 text-4xl ' >Медитации, дыхательные практики и трекер настроения <br></br> — всё в одном приложении.</h3></div>
</div>
<div ref={featuresRef} id='features' className='relative w-auto h-[440vh] bg-stone-950'>
<div className='w-auto mx-auto text-white pt-[5vh] left-[34vw] top-[8vh]  h-[40vh]' >
    <div className='text-center text-5xl font-light tracking-tighter pt-[10vh]' >Почему <span className='font-extralight bg-linear-60 text-transparent bg-clip-text from-purple-400 via-cyan-100 to-pink-300 ' >MindfullMoments</span>?<br></br>
    <h2 className='text-2xl mt-[2.5vh] font-sans tracking-normal' >Инструменты для спокойствия и гармонии в твоей жизни.</h2></div>
    <div className='mt-[8vh]' ><FeatureSection /></div>
</div> 
</div>
<div  ref={anotherRef}  className='w-auto flex-col  h-[100vh] bg-linear-30 from-purple-300 via-cyan-100/20 to-pink-200 flex justify-center  backdrop-blur-3xl' >
    <h1 className='font-extralight text-5xl  text-center pt-[3vh] tracking-tight' >Как же это работает?</h1>
    <Steps/>
</div>
<div className='w-[99vw] text-stone-700 font-semibold flex items-center justify-center text-center  h-[10vh] bg-stone-950 border-t-2 border-t-white' >
    <p>Сайт был сделан Матвеем Синицким по идеи нейросети(не реальный проект,без референса)</p>
</div>

</>
   

}
export default App
