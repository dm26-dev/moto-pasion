import { getMotorcycleByBrand } from '@/helpers/getMotorcycleByBrand'
import { ListCards } from '@/components/listCard/ListCards'
import st from './page.module.scss'

const Page = () => {

  const motorcycles = getMotorcycleByBrand('ktm')

  return (
    <div className={st.cont}>
      <h2>Ktm Motos</h2>
      <ListCards motorcycles={motorcycles} />
    </div>
  )
}

export default Page