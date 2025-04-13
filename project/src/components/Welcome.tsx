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
          nutrients and then the app will scan of all the ingredients to have a
          fully-loaded grocery list for the user.
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
          your search based on calorie goals, cuisine, or your diet. Once you've
          found what you are looking for, navigate to your favorites page to see
          all the recipes you've saved.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
