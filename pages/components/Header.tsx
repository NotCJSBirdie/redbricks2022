import styles from "./Header.module.css";
import Image from "next/image";
import Redbrick from "../../public/assets/redbrickslogo.png";

const Header = () => {
  return (
    <div>
      <header id={styles.borderbottomheader} className=" body-font border-b-2 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="w-1/6">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image id={styles.redbricks} alt="" src={Redbrick} />
            </a>
          </div>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a id={styles.headerright} className="mr-5 text-xl">
              CART (0)
            </a>
            <a id={styles.headerright} className="mr-5 text-xl">
              MENU
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
