//Outline of fields collected from recipes in EDAMAM
import mongoose, {Model, Schema} from "mongoose";

interface recipes extends Document{
    name: string;
    ingredientLines: string[];
    calories: number;
    image: string; //Store the recipe image using the image URL 
    dishType: string;
}

const recipeSchema = new Schema<recipes>({
    name: {
        type: String,
        required: true,
    },

    ingredientLines:{type: [String],required: true,
    },

    calories: {
        type: Number,
        required: true,
    }, 

    image: {
        type: String,
    },
    dishType: {
        type: String,
    },
});

const Recipe: Model<recipes> = mongoose.models.Recipe || mongoose.model<recipes>("Recipe", recipeSchema);
export default Recipe;
