import Image from "next/image";
import Card from "./Card";
import styles from './Card.module.css'

interface RecipeProps {
    recipe: {
        _id: number;
        title: string;
        ingredientLines: string;
        calories: number;
        url: string;
    };
}

const Recipe = ({ recipe }: RecipeProps) => {
    return (
        <Card>

            <div className={styles.content}>
                <h1 className={styles.title}>
                    {recipe.title}
                </h1>
                <p className={styles.description}>
                    {recipe.calories}
                </p>
                <p className={styles.description}>
                    {recipe.ingredientLines}
                </p>
                <p className={styles.favorite}>
                    Add To Favorites
                </p>
            </div>
            <div className={styles.imgwrapper}>
                <Image
                    src={recipe.url}
                    alt={recipe.title}
                    fill
                    className={styles.img}
                    sizes="(max-width:770px) 100px, 150px"
                />
            </div>
        </Card>
    );
};

export default Recipe;