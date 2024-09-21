import * as React from "react";
import * as Router from "react-router-dom";
import TopBarHeader from "../components/Header/TopBarHeader";
import Header from "../components/Header/Header";
import { Menu } from "lucide-react";
import Footer from "../components/Footer/Footer";
import BottomBarFooter from "../components/Footer/BottomBarFooter";

const menus = [
  {
    id: 1,
    name: "Beranda",
    path: "/",
  },
  {
    id: 2,
    name: "Tentang",
    path: "/tentang",
  },
  {
    id: 3,
    name: "Portofolio",
    path: "/portofolio",
  },
];

export const Layout = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = Router.useLocation();
  const [isNotMobile, setIsNotMobile] = React.useState(
    window.innerWidth >= 640
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsNotMobile(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-between">
      <div>
        <div>
          <TopBarHeader />
          <Header
            children={
              <>
                <Menu
                  size={24}
                  className="bg-gray-100 p-0.5 rounded-md lg:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                />
                <div className="hidden lg:flex gap-10">
                  {menus.map((menu) => (
                    <a
                      key={menu.id}
                      href={menu.path}
                      className={`lg:hover:bg-gray-100 lg:hover:border-0 lg:hover:rounded-lg lg:p-2 ${
                        location.pathname === menu.path
                          ? "border-b border-primary"
                          : null
                      }`}
                    >
                      {menu.name}
                    </a>
                  ))}
                  {!isNotMobile && <a href="/">Masuk</a>}
                </div>
              </>
            }
          />
          <div
            className={`absolute w-full bg-primary p-2 text-white transition-transform duration-300 transform ease-in ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col text-sm gap-y-3">
              {menus.map((menu) => (
                <a key={menu.id} href={menu.path}>
                  {menu.name}
                </a>
              ))}
              {!isNotMobile && <a href="/">Masuk</a>}
            </div>
          </div>
        </div>
        <div
          className={`transition-all duration-500 ${
            isOpen ? "mt-[8.1rem]" : null
          }`}
        >
          <Router.Outlet />
        </div>
      </div>
      <div>
        <Footer />
        <BottomBarFooter />
      </div>
    </section>
  );
};
