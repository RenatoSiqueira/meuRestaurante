import React from 'react'

const Footer = ({twitter, facebook}) => {
    return (
        <div id="footer" className="bg-gray-400">
        <div className="text-4xl text-white">
            <h2>Siga-nos nas Redes Sociais</h2>
        </div>
        <ul className="contact">
            {
                twitter &&
                <li><a href={`https://twitter.com/${twitter}`} className="icon icon-twitter"><span>Twitter</span></a></li>
            }
            {
                facebook &&
                <li><a href={`https://www.facebook.com/${facebook}`} className="icon icon-facebook"><span></span></a></li>
            }
        </ul>
    </div>
    )
}

export default Footer