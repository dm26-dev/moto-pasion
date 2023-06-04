"use client"

import { useRouter } from 'next/navigation'
import st from './page.module.scss'

const Page = () => {

  const router = useRouter()
  const redirectKtm = () => router.push('/ktm')

  return (
    <div className={st.cont}>
      <h2 className={st.cont__title}>MOTO PASION</h2>

      <p className={st.cont__desc} >Esta página web esta dedicada a que encuentres tu moto ideal,
        esa que se adapta a tu dia a dia, buena suerte.
      </p>

      <div className={st.cont__icons} onClick={redirectKtm}>
        <span className={st.cont__icons_text} >Empezemos</span>
        <img className={st.cont__icons_img} src="/icons/row.svg" alt="wallpaper-motos" />
      </div>

    </div>
  )
}

export default Page