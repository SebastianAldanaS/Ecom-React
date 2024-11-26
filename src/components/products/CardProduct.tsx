import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";

interface Props {
    img: string;
    name: string;
    price: number;
    slug: string;
    colors: {name: string, color: string} [];
    variants: any[];
}

export const CardProduct = (
    {img, name, price, slug, colors, variants}: Props
) => {

    const [ActiveColor, setActiveColor] = useState
    <{name: string, color: string}>(colors[0]);
    
    return (
        <div className="flex flex-col gap-6 relative">
            <Link to={ `/celulares/${slug}` } className="flex relative group">
                <div className="flex h-[350px] w-full items-center justify-center py-2 lg:h-[250px]">
                    <img src={img} alt={name} 
                    className='object-contain h-full w-full'/>
                </div>
                <button className="bg-white border border-slate-200 absolute w-full bottom-0 py-5 rounded-3x1 flex items-center justify-center gap-1 text-sm font-medium hover:bg-stone-100 translate-y-[100%] transition-all duration-300 group-hover:translate-y-0">
                    <FiPlus>
                        Añadir al carrito
                    </FiPlus>
                </button>
            </Link>

            <div className="flex flex-col gap-1 items-center">
                <p className='text-[15px] font-medium'>{name}</p>
                <p className='text-[15px] font-medium'>{price}</p>
                <div className="flex gap-3">
                    {colors.map(color => (
                        <span key={color.color}
                        className={
                            `grid place-items-center w-5 h-5 rounded-full cursor-pointer`
                        }>

                            <span className="w-[14px] h-[14px] rounded-full"
                            style={{background: color.color,}}
                            />
                        </span>
                    ))}
                </div>

            </div>

            <div className="absolute top-2 left-2">
                {
                    stock === 0 && <span>Agotado</span>
                }
            </div>
        </div>
    );
    }