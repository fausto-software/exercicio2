import { InputTS } from '../../types/Input'
import * as C from './styles'
import { useForm } from '../../contexts/ThemeContext'
import { useState } from 'react'
import useDebounce from './useDebounce'

const delay = 500

export const Input = ({value, search}: InputTS) => {
    const { state } = useForm()

    const [input, setInput] = useState('')
    
    const deboucedChange = useDebounce(search, delay)

    const handleChange = (e: string) => {
        deboucedChange(e)
        setInput(e)
    }

    return (
        <C.InputArea theme={state.theme}>
            <input
                type="text"
                placeholder="pesqisa o pais"
                value={input}
                onChange={e => handleChange(e.target.value)}
            />
            <select value="pesqisa o continente" onChange={e => handleChange(e.target.value)}>
                <option disabled selected>pesqisa o continente</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </C.InputArea>
    )
}