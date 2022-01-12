import styles from "./RedLogos.module.css";
import Image from "next/image";
import BrandLogos from "../../public/assets/brandlogospicture.png";

const RedLogos = () => {
  return (
    <div id={styles.redlogosborder} className="overflow-visible border-b-2">
      <div className="py-4"></div>

      <div
        id={styles.redlogosfont}
        className="flex flex-nowrap justify-between items-center"
      >
        <div className="w-2/5">
          <h1 className="flex flex-row">
            <span>
              <svg
                id={styles.svgwidth}
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-left"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#E82E2C"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="5" y1="12" x2="9" y2="16" />
                <line x1="5" y1="12" x2="9" y2="8" />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-right"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#E82E2C"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="15" y1="16" x2="19" y2="12" />
                <line x1="15" y1="8" x2="19" y2="12" />
              </svg>
            </span>
          </h1>
        </div>
        <div className="w-3/5 flex flex-row justify-between">
          <div className="w-auto">
            <h1 className="text-center">Coffee System</h1>
          </div>

          <div className="w-auto">
            <h1 className="flex flex-row items-center">
              Learn More
              <span className="mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-narrow-right"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#E82E2C"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="15" y1="16" x2="19" y2="12" />
                  <line x1="15" y1="8" x2="19" y2="12" />
                </svg>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container  py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Image alt="" src={BrandLogos} />
          </div>
        </div>
      </section>

      <div className="py-8"></div>
    </div>
  );
};

export default RedLogos;
