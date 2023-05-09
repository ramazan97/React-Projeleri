import { useTranslation } from "react-i18next";
function App() {

  const { t, i18n } = useTranslation();

  const clickHandle = async lang => {
    await i18n.changeLanguage(lang);
  };
  return (
    <div >
      dil : {i18n.language}
      {/* dil : {i18n.language} --> bu ifaded şunaki aktif dil ne ise onu gösteriyor */}
      <nav>
        <button onClick={() => clickHandle("tr")}>Turkce</button>
        <button onClick={() => clickHandle("en")}>English</button>
      </nav>
      <br />
      <h1>{t('welcome')}</h1>
    </div>
  );
}

export default App;
