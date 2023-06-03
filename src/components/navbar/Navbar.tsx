"use client"

import Link from 'next/link'
import st from './Navbar.module.scss'
import { routesData as rd } from '@/data/routesData'

export const Navbar = () => {

  return (
    <div className={st.container}>

      <div>
        <Link href="/ktm" className={st.active} >Motos</Link>

        {
          rd.map((route, i) =>
            <Link
              href={route.url}
              key={i}
            >
              {route.title}
            </Link>)
        }
      </div>

      <div>
        {/* <a className={st.active}>{user?.name}</a> */}
        {/* <button className={st.login_button} onClick={onlogout}>logout</button> */}
      </div>

    </div>
  )
}
