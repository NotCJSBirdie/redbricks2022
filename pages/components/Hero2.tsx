import VacationAwaits from "../../public/assets/vacationawaits.jpg";
import Image from "next/image";
import styles from "./Hero2.module.css";

const Hero2 = () => {
  return (
    <div id={styles.hero2border} className="border-b-2 ">
      <div className="py-4"></div>

      <div
        id={styles.donotdisturb}
        className="flex flex-row justify-between items-center"
      >
        <h1>Do not disturb</h1>
        <h1 className="flex flex-row items-center">
          Shop vacation
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
        <div className="container mx-auto flex py-5 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-1/2 mb-10 md:mb-0">
            <Image
              id={styles.vacationborder}
              className="object-cover object-center rounded "
              alt="hero"
              src={VacationAwaits}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1
              id={styles.vacationtitle}
              className="title-font mb-4 font-medium "
            >
              VACATION AWAITS
            </h1>
            <p id={styles.vacationbody} className="mb-8 leading-relaxed">
              It&apos;s that time of the year again. The scent of sunscreen is
              in the air, you had two to many margaritas last night at the
              office part and Vacation Coffee is here
            </p>
          </div>
        </div>
      </section>

      <div
        id={styles.donotdisturb}
        className="flex flex-row justify-between items-center"
      >
        <h1 id={styles.hero2topandbottom} className="w-1/3">
          Pack your bags, we&apos;re going on holiday.
        </h1>
        <h1 id={styles.hero2topandbottom} className=" w-1/3 text-center">
          1/1
        </h1>
        <h1 id={styles.hero2topandbottom} className="w-1/3 opacity-0">
          hello
        </h1>
      </div>

      <div className="py-16"></div>
    </div>
  );
};

export default Hero2;
