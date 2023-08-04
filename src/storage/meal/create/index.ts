import { MealInputTypeProps, MealListTypeProps, MealTypeProps } from "src/@types/meal";
import { getAllMeals } from "../getAllMeals";
import { MealInput } from "./MealInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "../storageConfig";

import uuid from 'react-native-uuid'

export async function create(input: MealInputTypeProps, date: string) { //verificar se a data já está cadastrada
    // return await AsyncStorage.removeItem(MEALS_COLLECTION)
       
    const mealNew = {
        id: uuid.v4().toString(),
        ...input
    }
    
    const stored = await getAllMeals();

    const dateOfDietAllReady = stored.filter((store) => store.date === date);

    if (dateOfDietAllReady.length > 0) {
        const storageUpdated = stored.map(store => {
            if (store.date === date) {
                return {
                  ...store,
                    data: [...store.data, mealNew]
                }
            } else {
                return store
            }
        })

        return saveInStorage(storageUpdated)
    }
    
    const newDayInDiet: MealListTypeProps = {
        date,
        data: [mealNew]
    }

    const newStorage = [...stored, newDayInDiet]

    return saveInStorage(newStorage)
}

async function saveInStorage(value: MealListTypeProps[]) {
    try {
        const meals = JSON.stringify(value);

        await AsyncStorage.setItem(MEALS_COLLECTION, meals)

    } catch (error) {
        throw error;
    }
}