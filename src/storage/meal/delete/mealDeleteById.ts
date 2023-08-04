import AsyncStorage from "@react-native-async-storage/async-storage"
import { getAllMeals } from "../getAllMeals"
import { MEALS_COLLECTION } from "../storageConfig"

export async function mealDeleteById(id: string) {
    try {
        const stored = await getAllMeals()

        const storable = stored.map(store => {
            const mealsFiltered = store.data.filter(data => data.id !== id)

            const listForStorage = {
              ...store,
                data: mealsFiltered
            }

            return listForStorage
        })

        const novo = storable.filter(store => store.data.length > 0)

        const newListForStorage = JSON.stringify(novo)

        await AsyncStorage.setItem(MEALS_COLLECTION, newListForStorage)

    } catch (error) {
        throw error
    }
}