import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <h1 className="text-xl font-bold text-blue-600">Gos.uz</h1>

      <nav className="flex items-center gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"
          }
        >
          {t("navbar.home")}
        </NavLink>

        <NavLink
          to="/cabinet/dashboard"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"
          }
        >
          {t("navbar.cabinet")}
        </NavLink>

        <select
          defaultValue={i18n.language}
          onChange={handleLangChange}
          className="border border-gray-300 rounded px-2 py-1 bg-white"
        >
          <option value="uz">🇺🇿 UZ</option>
          <option value="ru">🇷🇺 RU</option>
          <option value="en">🇬🇧 EN</option>
        </select>
      </nav>
    </header>
  );
};

export default Navbar;
