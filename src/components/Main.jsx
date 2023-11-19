import Download from "./Download.jsx";

function Main() {
  return (
    <main className="main">
      <div className="main-text">
        <h1>
          PomoLym<span>: Pomodoro para Minimalistas</span>
        </h1>

        <p>
          <b>PomoLym</b> es una app tipo pomodoro. Simple, intuitiva y
          funcional. Diseño oscuro y minimalista.
          <br />
          <br />
          Personaliza los ciclos de trabajo según tus necesidades.
          <br /> <br />
          ¡Descarga <b>PomoLym</b> y aumenta tu productividad!
        </p>
        <Download />
      </div>
    </main>
  );
}

export default Main;
