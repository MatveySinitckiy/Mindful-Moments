import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Yoga2 from './assets/yoga2.jpg';
import Yoga3 from './assets/yoga3.jpg';
import Yoga4 from './assets/yoga4.jpg';
import Yoga5 from './assets/yoga5.jpg';
// Регистрируем плагин ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const FeatureSection = () => {
  // Создаем реф для хранения всех элементов feature-element
  const featureElementsRef = useRef([]);

  // Функция для добавления элементов в массив референций
  const addToRefs = (el) => {
    if (el && !featureElementsRef.current.includes(el)) {
      featureElementsRef.current.push(el);
    }
  };

  useEffect(() => {
    featureElementsRef.current.forEach((element) => {
      // Проверяем, является ли элемент flex-row-reverse
      const isReverse = element.classList.contains('flex-row-reverse');
      const card = element.querySelector('.feature-card');

      // Начальная позиция карточки: слева для flex-row, справа для flex-row-reverse
      const startPosition = isReverse ? '100%' : '-100%';

      // Устанавливаем начальное состояние карточки
      gsap.set(card, {
        x: startPosition,
        opacity: 0,
      });

      // Создаем анимацию для карточки
      gsap.to(card, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%', // Запуск, когда верх элемента на 80% в области видимости
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Очистка ScrollTrigger при размонтировании
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex  feature-element flex-row" ref={addToRefs}>
        <div className="feature-image bg-purple-500">
          <img src={Yoga2} alt="yoga" className="w-[100%] h-[100%]" />
        </div>
        <div className="feature-card">
          <h1>10-минутные сессии для снятия стресса.</h1>
        </div>
      </div>

      <div className="flex feature-element flex-row-reverse" ref={addToRefs}>
        <div className="feature-image bg-purple-500">
          <img src={Yoga3} alt="yoga" className="w-[100%] h-[100%]" />
        </div>
        <div className="feature-card">
          <h1>Медитируй без интернета.</h1>
        </div>
      </div>

      <div className="flex feature-element flex-row" ref={addToRefs}>
        <div className="feature-image bg-purple-500">
          <img src={Yoga4} alt="yoga" className="w-[100%] h-[100%]" />
        </div>
        <div className="feature-card">
          <h1>
            Простые упражнения для расслабления <br /> в любой момент.
          </h1>
        </div>
      </div>

      <div className="flex feature-element flex-row-reverse" ref={addToRefs}>
        <div className="feature-image bg-purple-500">
          <img src={Yoga5} alt="yoga" className="w-[100%] h-[100%]" />
        </div>
        <div className="feature-card">
          <h1>
            Следи за своим <br /> эмоциональным состоянием.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;