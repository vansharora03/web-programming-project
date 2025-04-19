
//ADD TO USERS SCHEMA
import mongoose, {Model, Schema} from "mongoose";

interface favorites extends Document{
    userId: mongoose.Types.ObjectId;
    label: string;
    ingredientLines: string[];
    calories: number;
    image: string; //Store the recipe image using the image URL 
    dishType: string;
}

const favoriteSchema = new Schema<favorites>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    label: {
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

const Favorite: Model<favorites> = mongoose.models.Favorite || mongoose.model<favorites>("Favorite", favoriteSchema);
export default Favorite;
