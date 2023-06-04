import { motosDB } from "@/data/motosDB"
import { Motorcycle } from "@/interfaces/Motorcycle"

export const getMotorcycleByBrand = (brand: string): Motorcycle[] => {

    const acceptedBrands: string[] = ["honda", "ktm", "yamaha", "kawasaki"]

    const motorcycles: Motorcycle[] = motosDB.filter(mt => mt.brand === brand)

    if (acceptedBrands.includes(brand)) {
        return motorcycles
    }

    return []

}
