import React from 'react'
import useSWR from 'swr'

import PageTitle from '../components/PageTitle'
import Description from '../components/Description'
import Coupons from '../components/Coupons'
import SocialMedia from '../components/SocialMedia'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    const {data, error} = useSWR('/api/get-promo', fetcher)
    return(
        <div>
            <PageTitle title='Seja bem Vindo' />  
            <Description />
            <Coupons />      
        {
            !data && <p>Loading...</p>
        }
        {
            !error && 
            data && 
            data.showCoupon &&
            <p>{data.message}</p>
        }
            <SocialMedia />
        </div>
    )
}

export default Index