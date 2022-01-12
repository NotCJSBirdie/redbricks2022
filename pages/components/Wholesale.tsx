import Image from "next/image";
import WholesaleVan from "../../public/assets/wholesalevan.jpg";
import styles from "./Wholesale.module.css";

const Wholesale = () => {
  return (
    <div id={styles.wholesaleborder} className="border-b-2">
      <div className="py-4"></div>

      <div
        id={styles.wholesaleblend}
        className="flex flex-row justify-between items-center"
      >
        <h1>Wholesale</h1>
        <h1 className="flex flex-row items-center">
          Wholesale
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-narrow-right"
              width="40"
              height="40"
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

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-5  md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
              id={styles.wholesaletitle}
              className="title-font mb-4 font-medium text-gray-900 "
            >
              NEED A LOT OF COFFEE?
            </h1>
            <p id={styles.wholesalebody} className="mb-8 leading-relaxed">
              We got you. Redbrick is here to help you serve delicious coffee.
              We work in a collaborative way to find the best approach to coffee
              for your business
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              id={styles.wholesalepicture}
              className="object-cover object-center rounded"
              alt="hero"
              src={WholesaleVan}
            />
            <div className="flex flex-row justify-between py-4">
              <h1 id={styles.brickievanfont}>Brickie van</h1>
              <h1 id={styles.brickievanfont}>1/1</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="py-4"></div>
    </div>
  );
};

export default Wholesale;
