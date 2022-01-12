import styles from "./Carousel2.module.css";
import Coffee6 from "../../public/assets/coffee6.jpg";
import Coffee7 from "../../public/assets/coffee7.jpg";
import Coffee8 from "../../public/assets/coffee8.jpg";
import Coffee9 from "../../public/assets/coffee9.jpg";
import Coffee10 from "../../public/assets/coffee10.jpg";
import Image from "next/image";

const Carousel2 = () => {
  return (
    <div id={styles.carousel2border} className="border-b-2">
      <div className="py-4"></div>

      <div
        id={styles.carousel2blend}
        className="flex flex-row justify-between items-center"
      >
        <h1>Blends</h1>
        <h1 className="flex flex-row items-center">
          Shop Now
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
        <div className="container px-4 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-2 lg:w-1/5 md:w-1/5">
              <div className="h-full flex flex-col items-center text-left">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center mb-4"
                  src={Coffee6}
                />
                <div className="w-full py-2">
                  <h2
                    id={styles.singleblend}
                    className="title-font font-medium text-lg text-gray-900"
                  >
                    Coffee Coffee
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/5 md:w-1/5">
              <div className="h-full flex flex-col items-center text-left">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={Coffee7}
                />
                <div className="w-full py-2">
                  <h2
                    id={styles.singleblend}
                    className="title-font font-medium text-lg text-gray-900"
                  >
                    Good Day Coffee
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/5 md:w-1/5">
              <div className="h-full flex flex-col items-center text-left">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={Coffee8}
                />
                <div className="w-full py-2">
                  <h2
                    id={styles.singleblend}
                    className="title-font font-medium text-lg text-gray-900"
                  >
                    Dark Coffee
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/5 md:w-1/5">
              <div className="h-full flex flex-col items-center text-left">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={Coffee9}
                />
                <div className="w-full py-2">
                  <h2
                    id={styles.singleblend}
                    className="title-font font-medium text-lg text-gray-900"
                  >
                    Rogue Coffee
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/5 md:w-1/5">
              <div className="h-full flex flex-col items-center text-left">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={Coffee10}
                />
                <div className="w-full py-2">
                  <h2
                    id={styles.singleblend}
                    className="title-font font-medium text-lg text-gray-900"
                  >
                    Decaf Coffee
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-4"></div>
    </div>
  );
};

export default Carousel2;
