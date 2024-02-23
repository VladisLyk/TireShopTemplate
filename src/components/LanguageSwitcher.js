import { useLanguage } from "@/components/LanguageContext";
import { useState } from "react";

const LanguageSwitcher = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const changeLanguage = (languageCode) => {
    setLanguage(languageCode);
    toggleDropdown();
  };

  return (
    <div className={`language-switcher ${isDropdownOpen ? 'open' : ''}`}>
      <div className="current-language" onClick={toggleDropdown}>
        {currentLanguage === 'en' ? 'English' : 'Latvian'}
        {/* Добавьте другие языки по мере необходимости */}
      </div>
      {isDropdownOpen && (
        <div className="language-dropdown">
          <div onClick={() => changeLanguage('en')}>English</div>
          <div onClick={() => changeLanguage('lt')}>Latvian</div>
          {/* Добавьте другие языки по мере необходимости */}
        </div>
      )}
      <style jsx>{`
        .language-switcher {
          position: fixed;
          bottom: 10px;
          right: 10px;
          background-color: #fff;
          border: 1px solid #ccc;
          padding: 5px;
          border-radius: 5px;
          cursor: pointer;
          z-index: 2;
        }

        .current-language {
          font-weight: bold;
        }

        .language-dropdown {
          display: flex;
          flex-direction: column;
          position: absolute;
          bottom: 100%;
          left: 0;
          background-color: #fff;
          border: 1px solid #ccc;
          border-bottom: none;
          border-radius: 5px 5px 0 0;
          z-index: 1;
        }

        .language-dropdown div {
          padding: 5px;
          cursor: pointer;
        }

        .language-switcher.open {
          border-radius: 0 0 5px 5px;
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
