import Download from "./Download.jsx";

function Main() {
  return (
    <main className="main">
      <div className="main-text">
        <h1>
          PomoLym<span>: Pomodoro for Minimalists</span>
        </h1>

        <p>
          <b>PomoLym</b> is a pomodoro app that focuses on simplicity. With a
          dark and minimalist design, it is perfect for those looking for an
          application that does not distract or overwhelm with unnecessary
          options.
          <br />
          <br />
          It has basic features of a Pomodoro app: customizable work and rest
          cycles to suit your needs.
          <br /> <br />
          ¡Download <b>PomoLym</b> today and start being more productive!
        </p>
        <Download />
      </div>
    </main>
  );
}

export default Main;
