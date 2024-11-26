const brands = [
    { Image: "/img/brands/Apple-Logo.webp", alt: "Apple" },
    { Image: "/img/brands/honor-logo.png", alt: "Honor" },
    { Image: "/img/brands/huawei-logo.png", alt: "Huawei" },
    { Image: "/img/brands/realme-logo.webp", alt: "Realme" },
    { Image: "/img/brands/Samsung-logo.webp", alt: "Samsung" },
    { Image: "/img/brands/xiaomi-logo.webp", alt: "Xiaomi" },
];

export const Brands = () => {
    return <div className="flex flex-col items-center gap-3 pt-16 pb-12">
        <h2 className="font-bold text-2xl"> Marcas disponibles</h2>
        <p className="w-2/3 text-center text-sm md:text-base">
        Marcas de celulares
        </p>

        <div className="grid grid-cols-3 gap-6 mt-8 items-center md:grid-cols-6">
            {brands.map((brand, index) => (
                <div key={index}>
                    <img 
                        src={brand.Image} 
                        alt={brand.alt} 
                    />
                </div>))}
        </div>
    </div>
}