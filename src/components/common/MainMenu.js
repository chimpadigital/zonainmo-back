import {
  homeItems,
  blogItems,
  listingItems,
  propertyItems,
  pageItems,
} from "@/data/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MainMenu = () => {
  const pathname = usePathname();
  const [topMenu, setTopMenu] = useState("");
  const [submenu, setSubmenu] = useState("");
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    homeItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("home");
      }
    });
    blogItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("blog");
      }
    }); 
  }, [pathname]);
 
  return (
    <ul className="ace-responsive-menu">
      <li className="visible_list  ">
        <a href="dashboard-home">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
            Home
          </span>
        </a>
        {/* Level Two*/}

      </li>
      {/* End homeItems */}
 
      <li className="visible_list  ">
        <a href="dashboard-add-property">
          <span
            className={topMenu == "property" ? "title menuActive" : "title"}
          >
            Property
          </span>
        </a> 
      </li>
    </ul>
  );
};

export default MainMenu;
