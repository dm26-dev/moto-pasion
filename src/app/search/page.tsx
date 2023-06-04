"use client"

import { FormEvent, useState, ChangeEvent } from 'react'
import { getMotorcycleByName } from '@/helpers/getMotorcycleByName'
import { ListCards } from '../../components/listCard/ListCards';
import st from './page.module.scss'

const Page = () => {

    const [text, setText] = useState<string>('')

    const motorcycles = getMotorcycleByName(text)

    const onSearchMotorcycle = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Data")
    }

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return (
        <div className={st.cont}>
            <h2>Search</h2>

            <form onSubmit={onSearchMotorcycle}>
                <input type="text" onChange={onChangeText} value={text} />
            </form>

            <ListCards motorcycles={motorcycles} />

        </div>
    )
}

export default Page