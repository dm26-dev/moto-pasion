"use client"

import { useMemo } from 'react'
import { Card } from './Card'
import { getMotorcycleByBrand } from '@/helpers/getMotorcycleByBrand'
import st from './ListCards.module.scss'
import { Motorcycle } from '@/interfaces/Motorcycle'

export const ListCards = ({ brand }: { brand: string }) => {

    const motorcycles: Motorcycle[] = useMemo(() => getMotorcycleByBrand(brand), [brand])

    return (
        <div className={`${st.container}`}>
            {motorcycles.map((moto) => <Card key={moto.id} moto={moto} />)}
        </div>
    )
}
