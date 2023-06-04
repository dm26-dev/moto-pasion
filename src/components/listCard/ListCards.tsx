"use client"

import { Card } from './Card'
import st from './ListCards.module.scss'
import { Motorcycle } from '@/interfaces/Motorcycle'

export const ListCards = ({ motorcycles }: { motorcycles: Motorcycle[] }) => {
    return (
        <div className={`${st.container}`}>
            {motorcycles.map((moto) => <Card key={moto.id} moto={moto} allData={false} />)}
        </div>
    )
}
