import './styles.css'

const days = [
  ['01','ПРИЛЁТ. ОКЕАН. ШАМПАНСКОЕ.','Перелёт на Лансароте, машина, дорога к океану и первый вечер на острове. Заселяемся и открываем путешествие там, где слышен Атлантический океан.'],
  ['02','ВНУТРИ ВУЛКАНА','Jameos del Agua, Cueva de los Verdes, Jardín de Cactus и Mirador del Río. День Цезаря Манрике, лавовых тоннелей и первого взгляда на La Graciosa с высоты.'],
  ['03','ДИКИЙ СЕВЕР','Famara, Caleta de Famara, Caletón Blanco и места Манрике. Огромный пляж, ветер, серферы, белый песок и архитектура, которая выросла прямо из острова.'],
  ['04','ЗЕМЛЯ ПОМНИТ ОГОНЬ','Timanfaya, El Golfo и Los Hervideros. Едем через лавовые поля, смотрим в кратеры и оказываемся среди пейзажей, ради которых Лансароте сравнивают с другой планетой.'],
  ['05','LA GRACIOSA','Через Órzola уходим на маленьком пароме на соседний остров. Велосипеды, песчаные дороги, океан и пляжи, где весь план на день умещается в слово «никуда».'],
  ['06','ОСТРОВ БЕЗ ПЛАНА','Свободный день для тех мест, куда захочется вернуться. Costa Teguise, Puerto del Carmen, пляж, прогулки и длинный ужин у океана.'],
  ['07','ДО СЛЕДУЮЩЕЙ ВСТРЕЧИ','Последнее утро у океана, солнце и дорога домой. Лансароте обычно заканчивается одной мыслью: сюда хочется вернуться.'],
]

const chapters = [
  {key:'manrique', kicker:'CÉSAR MANRIQUE', title:'ЧЕЛОВЕК, КОТОРЫЙ\nПРИДУМАЛ ОСТРОВ', text:'Художник, архитектор и главный визуальный автор Лансароте. Его пространства соединяют лаву, белые стены, воду и растения так естественно, будто остров сам решил заняться дизайном.', image:'/images/Manrike.png'},
  {key:'jameos', kicker:'JAMEOS DEL AGUA', title:'АРХИТЕКТУРА\nВНУТРИ ВУЛКАНА', text:'Лавовая труба превращается в сад, подземное озеро и почти сюрреалистическое пространство. Здесь особенно хорошо видно, как Манрике работал вместе с ландшафтом.', image:'/images/jameos.png'},
  {key:'famara', kicker:'FAMARA', title:'ТАМ, ГДЕ ВЕТЕР\nВСТРЕЧАЕТ ОКЕАН', text:'Километры песка под огромными скалами. Серферы, ветер, Атлантика и тот самый масштаб, после которого телефон наконец хочется убрать в карман.', image:'/images/famara.png'},
  {key:'geria', kicker:'LA GERIA', title:'ВИНО, ВЫРОСШЕЕ\nИЗ ПЕПЛА', text:'Виноград здесь прячут в круглых углублениях среди чёрного вулканического пепла. Получается один из самых странных винных пейзажей Европы и очень лансаротская мальвазия.', image:'/images/la-geria.png'},
  {key:'golfo', kicker:'EL GOLFO', title:'ЗЕЛЁНОЕ ОЗЕРО.\nЧЁРНЫЙ БЕРЕГ.', text:'Кратер раскрывается прямо к океану, а зелёная лагуна лежит рядом с чёрным вулканическим пляжем. Цвета здесь выглядят слегка неправдоподобно, хотя всё настоящее.', image:'/images/el-golfo.png'},
]

function Poster({src, eyebrow, title, subtitle, id}){
  return <section className="poster" id={id}>
    <img src={src} alt=""/>
    <div className="shade"/>
    <div className="posterCopy"><span>{eyebrow}</span><h2>{title}</h2><p>{subtitle}</p></div>
  </section>
}

function App(){
  return <main>
    <nav><a href="#top">LANZAROTE</a><div><a href="#route">МАРШРУТ</a><a href="#places">МЕСТА</a><a href="#price">СТОИМОСТЬ</a><a href="#join">ПОЕХАЛИ</a></div></nav>

    <header className="hero" id="top">
      <img src="/images/lanzarote-cover.png" alt="Lanzarote"/>
      <div className="grain"/>
      <div className="heroMeta"><b>АВТОРСКОЕ ПУТЕШЕСТВИЕ</b><span>КАНАРСКИЕ ОСТРОВА</span></div>
      <div className="scroll">ЛИСТАЙТЕ ЖУРНАЛ ↓</div>
    </header>

    <section className="manifest"><div className="folio">01 / ДРУГАЯ ПЛАНЕТА</div><h1>ЛАНСАРОТЕ<br/>И LA GRACIOSA</h1><p>Семь дней среди лавовых полей, океана, белой архитектуры и редких по красоте закатов. Место, куда можно прилететь обычным самолётом и несколько раз за день поймать себя на мысли, что Земля выглядит подозрительно неземной.</p><div className="stamp">3–9 НОЯБРЯ 2026<br/><small>7 ДНЕЙ · 6 НОЧЕЙ</small></div></section>

    <Poster id="timanfaya" src="/images/timanfaya.png" eyebrow="DAY 04 / TIMANFAYA" title="ЗЕМЛЯ ЕЩЁ ТЁПЛАЯ" subtitle="Лавовые поля, кратеры и дорога через национальный парк."/>

    <section className="route" id="route"><div className="folio">02 / МАРШРУТ</div><div className="routeHead"><h2>СЕМЬ ДНЕЙ.<br/>ОДИН ОСТРОВ.<br/>МНОГО ОКЕАНА.</h2><p>Порядок поездок может немного меняться из-за погоды и местных условий. Это маршрут живого путешествия, поэтому оставляем себе право свернуть туда, где сегодня особенно красиво.</p></div>{days.map(d=><article className="day" key={d[0]}><strong>{d[0]}</strong><h3>{d[1]}</h3><p>{d[2]}</p></article>)}</section>

    <Poster src="/images/la-graciosa.png" eyebrow="DAY 05 / LA GRACIOSA" title="ОСТРОВ, КОТОРЫЙ НИКУДА НЕ СПЕШИТ" subtitle="Полчаса на пароме, и ритм становится совсем другим."/>

    <section className="chapters" id="places">
      <div className="folio">03 / МЕСТА</div>
      {chapters.map((c,i)=><article className={`chapter ${i % 2 ? 'reverse' : ''}`} key={c.key}>
        <div className="chapterImage"><img src={c.image} alt={c.kicker}/><div className="posterIndex">0{i+1}</div></div>
        <div className="chapterCopy"><div className="pageMeta"><span>{c.kicker}</span><span>{String(i+1).padStart(2,'0')} / {String(chapters.length).padStart(2,'0')}</span></div><h2>{c.title.split('\n').map((x,j)=><span key={j}>{x}<br/></span>)}</h2><p>{c.text}</p><div className="rule"/></div>
      </article>)}
    </section>

    <section className="mapSection"><div className="folio">04 / КАРТА</div><div className="mapGrid"><div><h2>МАРШРУТ<br/>ПО ОСТРОВУ</h2><p>Север, западное побережье, вулканический юг и маленькая La Graciosa. На Лансароте расстояния небольшие, поэтому за неделю остров складывается в цельную историю.</p></div><div className="islandMap" aria-label="Стилизованная карта маршрута"><svg viewBox="0 0 520 720"><path className="island" d="M300 25 C350 80 338 145 390 195 C435 238 405 300 430 355 C452 405 420 462 380 500 C344 536 354 596 310 675 C276 712 230 677 214 632 C194 575 150 554 140 500 C127 430 93 398 115 335 C135 279 176 255 190 199 C207 130 245 69 300 25Z"/><path className="track" d="M302 78 C282 160 353 209 314 286 C272 363 363 407 310 485 C271 543 258 594 280 646"/><g className="pins"><circle cx="302" cy="78" r="8"/><text x="320" y="84">ÓRZOLA / LA GRACIOSA</text><circle cx="326" cy="206" r="8"/><text x="344" y="212">JAMEOS</text><circle cx="223" cy="285" r="8"/><text x="80" y="291">FAMARA</text><circle cx="309" cy="386" r="8"/><text x="327" y="392">LA GERIA</text><circle cx="272" cy="500" r="8"/><text x="112" y="506">TIMANFAYA</text><circle cx="257" cy="576" r="8"/><text x="105" y="582">EL GOLFO</text></g></svg><div className="graciosaDot">LA GRACIOSA</div></div></div></section>

    <section className="price" id="price"><div className="folio">05 / ПОЕЗДКА</div><h2>1130 / 1380 €</h2><p className="lead">6 ночей на острове. Проживание, автомобиль и насыщенная программа уже собраны в один маршрут.</p><div className="columns"><div><h3>ВКЛЮЧЕНО</h3><p>Проживание в апартаментах или на вилле недалеко от океана. Аренда автомобиля, топливо и парковки. Переезды по острову, экскурсии и входные билеты по основной программе. Разработка маршрута и сопровождение.</p></div><div><h3>ОТДЕЛЬНО</h3><p>Авиабилеты и багаж, питание и личные расходы, страховка. Дополнительные активности и места вне основной программы, включая отдельные опции на La Graciosa и дегустации.</p></div></div></section>

    <section className="join" id="join"><div><span>OPEN WORLD · TRAVEL EDITION 2026</span><h2>ДОБРО ПОЖАЛОВАТЬ<br/>НА ДРУГУЮ ПЛАНЕТУ.</h2><p>Я путешествую по Канарским островам больше десяти лет. Маршрут проверен поездками, перестроен много раз и собран так, чтобы увидеть главное и оставить место для случайных находок.</p><a href="https://www.facebook.com/aivantov">ЗАНЯТЬ МЕСТО →</a></div></section>
    <footer>LANZAROTE · 3–9 NOVEMBER 2026 <span>ALEXEI IVANTOV</span></footer>
  </main>
}
export default App
