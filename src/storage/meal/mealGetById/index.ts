import { MealTypeProps } from "src/@types/meal";
import { getAllMeals } from "../getAllMeals";

export async function mealGetById(id: string) {
    try {
        const stored = await getAllMeals()

        const m = stored.filter(item => {
            const achei = item.data.find(item => item.id === id)

            if (achei) {
                const r = item.data.find(i => i.id === id)
                return item.data = r ? [r] : []
            }
        }).reduce(item => item)

        return m
    } catch (error) {
        throw error;
    }
}