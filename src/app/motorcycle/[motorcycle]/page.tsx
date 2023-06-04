import { getMotorcycleById } from "@/helpers/getMotorcycleById"
import { Card } from "@/components/listCard/Card"
import st from './page.module.scss'

interface Page { params: { motorcycle: string } }

const Page = ({ params }: Page) => {

    const moto = getMotorcycleById(params.motorcycle)

    return (
        <div className={st.cont}>
            <h2>Motorcycle</h2>
            {
                moto && <Card moto={moto} allData={true} />
            }
        </div>
    )
}

export default Page