import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "../storageConfig";
import { MealListTypeProps } from "src/@types/meal";

export async function getAllMeals() {
    try {
        const stored = await AsyncStorage.getItem(MEALS_COLLECTION)

        const meals: MealListTypeProps[] = stored ? JSON.parse(stored) : []
    
        return meals
    } catch (error) {
        throw error;
    }
}