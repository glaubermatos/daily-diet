import AsyncStorage from "@react-native-async-storage/async-storage"
import { getAllMeals } from "../getAllMeals"
import { MEALS_COLLECTION } from "../storageConfig"
import { MealTypeProps } from "src/@types/meal"

export async function update(data: MealTypeProps, date: string) {
    try {
        const stored = await getAllMeals()

        const newStored = stored.map(days => {
            let indexMealFounded = 0;

            const mealFounded = days.data.find((meal, index) => {
                indexMealFounded = index;

                if (meal.id === data.id) {
                    return meal
                }
            })

            if (mealFounded) {
                const mealUpdated = {
                    ...data,
                    id: mealFounded.id
                }

                days.data.splice(indexMealFounded, 1)

                if (days.date === date){
                    days.data = [
                        ...days.data,
                        mealUpdated,
                    ]
                } else {
                    stored.map(days => {
                        if (days.date === date){
                            days.data = [
                                ...days.data,
                                mealUpdated
                            ]
                        }
                    })
                }

            }

            return days
        })

        const newStoredRemovedDaysWithoutMeals = newStored.filter(store => store.data.length > 0)

        const storable = JSON.stringify(newStoredRemovedDaysWithoutMeals)

        await AsyncStorage.setItem(MEALS_COLLECTION, storable)
    } catch (error) {
        throw error
    }
}