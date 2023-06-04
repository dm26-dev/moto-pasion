import { motosDB } from "@/data/motosDB"
import { Motorcycle } from "@/interfaces/Motorcycle"

export const getMotorcycleByName = (name: string): Motorcycle[] => {

    const nameLowerCase: string = name.toLowerCase()

    const result: Motorcycle[] = motosDB.filter(mt => mt.title.toLowerCase().includes(nameLowerCase))

    return result
}