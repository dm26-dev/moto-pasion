import Link from 'next/link'
import st from './Card.module.scss'
import { Motorcycle } from '@/interfaces/Motorcycle'

export const Card = ({ moto }: { moto: Motorcycle }) => {

    const { image, brand, title, power, torque, id } = moto

    return (
        <div className={st.card} >

            <div className={st.card_img}>
                <img src={image} alt="" />
            </div>

            <div className={st.card_desc} >
                <h3>{title}</h3>
                <p>Marca: {brand}</p>
                <p>Torque : {torque}</p>
                <p>Potencia: {power}</p>
                <Link href={`/motorcycle/${id}`} >Ver Mas ..</Link>
            </div>

        </div>
    )
}
