"use client"

import { ListCards } from '@/components/listCard/ListCards'
import st from './page.module.scss'

const page = () => {
 
  return (
    <div className={st.cont}>
      <h2>Honda Motos</h2>
      <ListCards brand='honda' />
    </div>
  )
}

export default page