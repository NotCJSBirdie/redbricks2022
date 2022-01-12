import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container  py-16 mx-auto flex md:items-center items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="md:w-1/6 w-full md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <h2
              id={styles.footerfont}
              className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
            >
              Information
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  id={styles.footerfont}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  id={styles.footerfont}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  id={styles.footerfont}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Copyright 2022
                </a>
              </li>
            </nav>
          </div>
          <div className="w-5/6 flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                id={styles.footerfont}
                className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
              >
                Location
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    id={styles.footerfont}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    6/161 Newcastle Street Fyshwick, Australian Capital
                    Territory
                  </a>
                </li>
                <li>
                  <a
                    id={styles.footerfont}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Australia 2609
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                id={styles.footerfont}
                className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
              >
                Follow
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    id={styles.footerfont}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    id={styles.footerfont}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Instagram
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                id={styles.footerfont}
                className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
              >
                Enquire
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    id={styles.footerfont}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    hello@redbrickcoffee.com.au
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
