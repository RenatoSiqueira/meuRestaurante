import React from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
    const save = async () => {
        const form = {
            Nome: 'a',
            Email: 'b',
            Whatsapp: 'c'
        }
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            console.log(data)
        } catch (error) {
                console.log('----',error)
        }
    }
    return (
        <div>
            <PageTitle title='Pesquisa' />
            <h1>Pesquisa</h1>
            <button onClick={save}>
                Salvar
            </button>
        </div>
    )
}

export default Pesquisa