import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div>
      <section id={styles.borderhero} className=" body-font border-b-2">
        <div className="container mx-auto flex   md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-full  flex flex-col items-start  mb-16 md:mb-0 ">
            <div>
              <h1
                id={styles.brandhero}
                className="title-font mb-4 font-medium text-center  "
              >
                REDBRICK
              </h1>
            </div>

            <p
              id={styles.brandsubtitle}
              className="mb-8 leading-relaxed w-1/2 text-center "
            >
              ROASTER, WHOLESALER AND DISTRIBUTER OF COFFEE AND COFFEE THINGS
            </p>
            <div className="py-32"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
