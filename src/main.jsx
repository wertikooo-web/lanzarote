import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight, MapPinned, Flame, Waves, Grape, Sparkles } from 'lucide-react';
import './styles.css';

const chapters = [
  { kicker: 'CHAPTER 01', title: 'LANZAROTE', subtitle: 'Там, где земля помнит огонь', tone: 'lava', image: '/images/lanzarote-cover.png' },
  { kicker: 'CHAPTER 02', title: 'TIMANFAYA', subtitle: 'Земля, которая ещё не остыла', tone: 'dark', image: '/images/timanfaya.png' },
  { kicker: 'CHAPTER 03', title: 'LA GRACIOSA', subtitle: 'Остров, который никуда не спешит', tone: 'sand', image: '/images/la-graciosa.png' },
];

const days = [
  ['DAY 01', 'ПРИЛЁТ И ПЕРВОЕ ЗНАКОМСТВО', 'Собираемся на острове, заселяемся, ловим первый закат и переключаемся на канарский ритм.'],
  ['DAY 02', 'ЛАВА, ОКЕАН И ЧЁРНЫЙ БЕРЕГ', 'Юг острова, вулканические пейзажи, океанские виды и места, где пейзаж выглядит почти нереально.'],
  ['DAY 03', 'TIMANFAYA', 'Маршрут по национальному парку, вулканические поля и тот самый ландшафт, ради которого Lanzarote хочется увидеть хотя бы раз.'],
  ['DAY 04', 'МАНРИКЕ И АРХИТЕКТУРА ОСТРОВА', 'Jameos del Agua, архитектура внутри лавы и день, когда становится понятно, почему этот остров выглядит цельно.'],
  ['DAY 05', 'LA GERIA', 'Виноградники в чёрном пепле, дегустации и один из самых фотогеничных винных ландшафтов Европы.'],
  ['DAY 06', 'LA GRACIOSA', 'Паром, велосипеды, песок и бирюзовая вода. День без спешки на маленьком острове напротив Lanzarote.'],
  ['DAY 07', 'ФИНАЛЬНЫЙ ДЕНЬ', 'Свободное утро, кофе, океан и возвращение домой с ощущением, что неделя прошла как хороший фильм.'],
];

function Poster({ item, index }) {
  return (
    <section className={`poster poster-${item.tone}`}>
      <motion.img
        src={item.image}
        alt={item.title}
        className="poster-image"
        initial={{ scale: 1.06, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
      />
      <div className="poster-overlay" />
      <div className="poster-copy">
        <span>{item.kicker}</span>
        <h2>{item.title}</h2>
        <p>{item.subtitle}</p>
      </div>
      <div className="poster-index">0{index + 1}</div>
    </section>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.08]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, 80]);

  return (
    <main>
      <section className="hero">
        <motion.img
          src="/images/lanzarote-cover.png"
          alt="Lanzarote"
          className="hero-image"
          style={{ scale: heroScale, y: heroY }}
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="hero-topline">AUTHOR'S JOURNEY · CANARY ISLANDS</div>
          <h1>LANZAROTE</h1>
          <p className="hero-subtitle">ТАМ, ГДЕ ЗЕМЛЯ ПОМНИТ ОГОНЬ</p>
          <div className="hero-bottom">
            <div className="date-badge">3–9 НОЯБРЯ 2026</div>
            <a href="#journey" className="scroll-link">Смотреть маршрут <ArrowDown size={18} /></a>
          </div>
        </div>
      </section>

      <section className="intro paper-section">
        <div className="eyebrow">7 DAYS / ATLANTIC / VOLCANOES</div>
        <div className="intro-grid">
          <h2>ОСТРОВ, КОТОРЫЙ ВЫГЛЯДИТ КАК ДРУГАЯ ПЛАНЕТА</h2>
          <div className="intro-copy">
            <p>Lanzarote собирает в одном кадре чёрную лаву, белые деревни, виноградники в вулканическом пепле и Атлантику цвета кобальта.</p>
            <p>За неделю проедем остров от Timanfaya до La Graciosa, увидим архитектуру Сесара Манрике, вулканические виноградники La Geria и оставим место для моря, ужинов и спонтанных остановок.</p>
          </div>
        </div>
        <div className="fact-strip">
          <div><Flame /> <strong>ВУЛКАНЫ</strong><span>Timanfaya и лавовые поля</span></div>
          <div><Waves /> <strong>ОКЕАН</strong><span>пляжи и северный берег</span></div>
          <div><Grape /> <strong>ВИНО</strong><span>La Geria и мальвазия</span></div>
          <div><Sparkles /> <strong>МАНРИКЕ</strong><span>архитектура внутри острова</span></div>
        </div>
      </section>

      <section className="magazine-stack">
        {chapters.map((chapter, index) => <Poster key={chapter.title} item={chapter} index={index} />)}
      </section>

      <section id="journey" className="journey paper-section">
        <div className="section-heading">
          <span>THE JOURNEY</span>
          <h2>СЕМЬ ДНЕЙ, КОТОРЫЕ ЛИСТАЮТСЯ КАК ЖУРНАЛ</h2>
        </div>
        <div className="days">
          {days.map(([day, title, text], index) => (
            <motion.article
              key={day}
              className="day-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.04, duration: 0.55 }}
            >
              <span>{day}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="day-line" />
            </motion.article>
          ))}
        </div>
      </section>

      <section className="map-section">
        <div className="map-art">
          <div className="map-island">
            <div className="route route-1" />
            <div className="route route-2" />
            <div className="route route-3" />
            <span className="pin p1">TIMANFAYA</span>
            <span className="pin p2">LA GERIA</span>
            <span className="pin p3">MANRIQUE</span>
            <span className="pin p4">ÓRZOLA</span>
          </div>
        </div>
        <div className="map-copy">
          <MapPinned size={30} />
          <span>ISLAND ROUTE</span>
          <h2>ОДИН ОСТРОВ. МНОГО РАЗНЫХ МИРОВ.</h2>
          <p>Маршрут собран так, чтобы дни отличались друг от друга по ритму и картинке: лавовые поля, архитектура, виноградники, океан и отдельный день на La Graciosa.</p>
        </div>
      </section>

      <section className="details paper-section">
        <div className="detail-card dark-card">
          <span>FORMAT</span>
          <h3>НЕБОЛЬШАЯ ГРУППА</h3>
          <p>Авторское путешествие с живым ритмом, без ощущения автобусной экскурсии.</p>
        </div>
        <div className="detail-card">
          <span>DATES</span>
          <h3>3–9 НОЯБРЯ 2026</h3>
          <p>Семь дней на Lanzarote с выездом на La Graciosa.</p>
        </div>
        <div className="detail-card">
          <span>STYLE</span>
          <h3>ROAD TRIP + OCEAN</h3>
          <p>Машины, короткие переезды, прогулки, дегустации и время для собственных открытий.</p>
        </div>
      </section>

      <section className="finale">
        <div className="finale-inner">
          <span>LANZAROTE · NOVEMBER 2026</span>
          <h2>ПОЕХАЛИ ТУДА, ГДЕ ЗЕМЛЯ ПОМНИТ ОГОНЬ</h2>
          <a href="#contact" className="cta">ХОЧУ НА ОСТРОВ <ArrowRight size={20} /></a>
        </div>
      </section>

      <footer id="contact">
        <div>LANZAROTE 2026</div>
        <div>3–9 НОЯБРЯ</div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
