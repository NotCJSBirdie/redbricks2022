import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <div id={styles.newsletterborder} className="border-b-2">
      <div className="flex flex-col w-full py-8">
        <h1 id={styles.newslettertitle} className="flex flex-wrap">
          Get emails from us, every so often.
        </h1>

        <div className="flex flex-row justify-between border-0">
          <input
            id={styles.newsletterinput}
            type="text"
            className="w-4/6 bg-transparent focus:bg-transparent  outline-none focus:text-red-600"
            placeholder="Enter your email"
          />
          <button
            id={styles.newsletterbutton}
            className="bg-transparent text-red-600  border-2 border-red-600 w-2/6 rounded-full"
          >
            Sign me up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
