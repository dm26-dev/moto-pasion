import { getMotorcycleByBrand } from '@/helpers/getMotorcycleByBrand';
import { ListCards } from '../../components/listCard/ListCards';
import st from './page.module.scss'

const page = () => {

  const motorcycles = getMotorcycleByBrand('yamaha')

  return (
    <div className={st.cont}>
      <h2>Yamaha Motos</h2>
      <ListCards motorcycles={motorcycles} />
    </div>
  )
}

export default page