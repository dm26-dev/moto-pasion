import Link from 'next/link'
import { Motorcycle } from '@/interfaces/Motorcycle'
import st from './Card.module.scss'

interface Card { moto: Motorcycle, allData: boolean }

export const Card = ({ moto, allData }: Card) => {

    const { image, brand, title, power, torque, id, weight, price, cylinder } = moto

    const dataExtra = () => {
        return (
            <>
                <p>Peso : {weight} </p>
                <p>Precio : {price}</p>
                <p>Torque : {torque}</p>
                <p>Potencia: {power}</p>
            </>
        )
    }

    return (
        <div className={st.card} >

            <div className={st.card_img}>
                <img src={image} alt={title} />
            </div>

            <div className={st.card_desc} >
                <h3>{title}</h3>
                <p>Marca: {brand}</p>
                <p>Cilindraje: {cylinder}</p>
                {allData ? dataExtra() : <Link href={`/motorcycle/${id}`} >Ver Mas ..</Link>}
            </div>

        </div>
    )
}
