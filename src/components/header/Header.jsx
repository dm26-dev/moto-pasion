"use client"
import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'

import st from './Header.module.scss'

import { routesData as rd } from '@/data/routesData'


export const Header = () => {

    const [isActive, setIsActive] = useState(false)

    const activeMenu = () => {
        setIsActive(!isActive)
    }

    const closeMenu = () => setIsActive(false)

    return (
        <header className={st.container}>

            <div className={st.container__desk}>

                <div className={st.container__desk_logo}>
                    <Link href={'/'}>Moto</Link>
                    <Link href={'/'}>Pasión</Link>
                </div>

                <div className={st.container__desk_options}>

                    <Link href={'/'} className={st.active}>Inicio</Link>
                    {
                        rd.map((route, i) =>
                            <Link
                                href={route.url}
                                key={i}
                            >
                                {route.title}
                            </Link>)
                    }

                    <Image
                        src="/icons/iconmenu.svg"
                        width={30}
                        height={30}
                        alt="Picture of the author"
                        onClick={activeMenu}
                    />
                </div>

            </div>

            {
                isActive &&
                <div className={st.container__mobile} >
                    <Link href={'/'} className={st.active} onClick={closeMenu}>Inicio</Link>
                    {
                        rd.map((route, i) =>
                            <Link
                                href={route.url}
                                key={i}
                                onClick={closeMenu}
                            >
                                {route.title}
                            </Link>)
                    }
                </div>
            }

        </header>
    )
}


