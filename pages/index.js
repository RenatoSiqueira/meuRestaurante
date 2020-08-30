import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    const {data, error} = useSWR('/api/get-promo', fetcher)
    return(
        <div>
            <PageTitle title='Seja bem Vindo' />
        <h1>Index</h1>
        <Link href='/sobre'>
            <a>Sobre</a>
        </Link>
        <Link href='/pesquisa'>
            <a>Pesquisa</a>
        </Link>
        {
            !data && <p>Loading...</p>
        }
        {
            !error && 
            data && 
            data.showCoupon &&
            <p>{data.message}</p>
        }
        </div>
    )
}

export default Index