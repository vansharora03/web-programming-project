"use client";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div>
      <div className="grid justify-center">
        <h1 className={styles.header}>What is Byte Sized?</h1>
      </div>
      <div className="grid justify-center text-center">
        <p className={styles.body}>
          Byte Sized is developed to help users add nutrition to their diet
          rather than restrict foods. With its vast search engine, users are
          able to find any recipe to their liking filled with the needed
          nutrients and save them to their favorites so they can try new foods
          or simply learn how to cook.
        </p>
      </div>
      <div className="grid justify-center">
        <h1 className={styles.header}>How to use Byte Sized</h1>
      </div>
      <div className="grid justify-center text-center">
        <p className={styles.body}>
          To get started, create your free account on the signup page. Then,
          browse hundreds of recipes on the recipes page. If you find something
          you like, add it to your favorites list so you can try it! Looking for
          something a little more specific? Use the search bar to narrow down
          your search based on types of dishes (soups, salads, desserts, etc).
          Once you've found what you are looking for, navigate to your favorites
          page to see all the recipes you've saved so you can make your grocery
          list more than just instant noodles.
        </p>
      </div>
      <div className="grid justify-center">
        <a
          className={styles.header}
          href="https://www.calculator.net/calorie-calculator.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Don't know how to meet your goals? Use this calculator!
        </a>
      </div>
    </div>
  );
};

export default Welcome;
