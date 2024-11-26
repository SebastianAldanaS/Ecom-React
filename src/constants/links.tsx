import { FaDiscord } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const navbarLinks = [
    {
        id: 1,
        tittle: 'Inicio',
        href : '/'
    },
    {
        id: 2,
        tittle: 'Logos',
        href : '/Logos'
    },
    {
        id: 3,
        tittle: 'Nosotros',
        href : '/Nosotros'
    },
    {
        id: 4,
        tittle: 'Discord',
        href : 'https://discord.com/'
    },
    
]

export const socialLinks = [
    {
        id:1,
        tittle: 'Discord',
        icon: <FaDiscord/>,
        href: 'https://discord.com/'
    },
    {
        id:2,
        tittle: 'Facebook',
        icon: <FaFacebook/>,
        href: 'https://facebook.com/'
    },
    {
        id:3,
        tittle: 'Instagram',
        icon: <FaInstagramSquare/>,
        href: 'https://instagram.com/'
    }
]