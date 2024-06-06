import { FormattedMessage, FormattedDate } from "react-intl";
import "./App.css";
import SelectLanguage from "./components/SelectLanguage";

function App({ date }) {
  // Estamos trayendo la fecha desde el main.jsx para poder setearla en el componente de FormattedDate
  return (
    <div className='App'>
      <SelectLanguage />{" "}
      {/* Traernos el selector de lenguajes para poder cambiar el lenguaje establecido por defecto en nuestro INTL desde el navegador */}
      <header className='App-header'>
        <p>
          {/* Estamos añadiendo un componente de el INTL para poder visualizar nuestros textos en diferentes idiomas en base al ID que le pasemos por props */}
          <FormattedMessage id='app.header' defaultMessage='app.header' />{" "}
        </p>
        <p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FormattedMessage id='app.content' />
          </a>
        </p>
        <p>
          {" "}
          {/* En esta caso le añadimos informacion dinamica al componente del INTL utilizando la KEY username */}
          <FormattedMessage
            id='app.channel.plug'
            values={{ username: "Peter Parker" }}
          />
        </p>
        <p>
          {" "}
          {/* Estamos seteando la fecha en funcion del idioma establecido en el INTL */}
          <FormattedDate
            value={date}
            year='numeric'
            month='long'
            day='numeric'
            weekday='long'
          />
        </p>
      </header>
    </div>
  );
}

export default App;
