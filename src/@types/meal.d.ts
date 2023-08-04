export type MealTypeProps = {
    id: string;
    meal: string;
    description: string;
    time: string;
    insideTheDiet: boolean;
}

export type MealInputTypeProps = {
    meal: string;
    description: string;
    time: string;
    insideTheDiet: boolean;
}

export type MealListTypeProps = {
    date: string;
    data: MealTypeProps[];
}