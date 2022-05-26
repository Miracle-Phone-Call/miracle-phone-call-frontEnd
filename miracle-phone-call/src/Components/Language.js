import {useEffect} from 'react';
import '../Component-Styling/language.css'

const LanguageChange = () => {

  let variableName = 0;

function googleTranslateElementInit() {
  if (variableName === 0) {
    new window.google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,es',  layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false }, 'google_translate_element')
  }
  variableName++;
}
  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, [])

  return (
    <div className="googleTranslator">
      <div id="google_translate_element"></div>
    </div>
  );
};

export default LanguageChange