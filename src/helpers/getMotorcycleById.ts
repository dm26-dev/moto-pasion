import { Motorcycle } from "@/interfaces/Motorcycle";
import { motosDB } from "@/data/motosDB";

export const getMotorcycleById = (id: string): Motorcycle | undefined => {

    const result = motosDB.find(mt => mt.id === id)

    return result

}