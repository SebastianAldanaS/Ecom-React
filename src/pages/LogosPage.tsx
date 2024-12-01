import { allCelulares } from "../data/initialData"
import { CardProduct } from "../components/products/CardProduct";
import { ContainerFilter } from "../components/products/ContainerFilter";


export const LogosPage = () => {
    const prepareProduct = (allCelulares);
    return <>
    <h1 className="text-5xl font-semibold text-center mb-12">
        Logos
    </h1>

    <div className="grid grid-cols-1 gab-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <ContainerFilter/>

        <div className="col-span-2 lg:col-span-2 xl:col-span-4 flex flex-col gab-12">
            <div className="grid grid-cols-2 gap-3 gap-y-10 xl:grib-cols-4">
                {prepareProduct.map(product => (
                    <CardProduct 
                    key={product.id} 
                    name={product.name} 
                    price={product.price} 
                    colors={product.colors} 
                    img={product.images[0]} 
                    slug={product.slug} 
                    variants={product.variants}  />
                ))}
            </div>
        </div>
    </div>

    </>
}