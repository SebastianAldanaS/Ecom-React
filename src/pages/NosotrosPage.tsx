export const NosotrosPage = () => {
    return <div className="space-y-5">
        <h1 className="text-3xl font-semibold text-center">Nuestro Equipo</h1>
        <p className="text-lg text-center">Somos un grupo de personas dedicados a la venta de productos FiveM.</p>
        <p className="text-lg text-center">Nuestro objetivo es brindar a nuestros clientes la mejor experiencia de compra.</p>
        <img src="https://logos-world.net/wp-content/uploads/2021/03/FiveM-Symbol.png" 
            alt="img fondo"
            className="h-[600px] w-full object-cover" />

        <div className="flex flex-col gap-4 tracking-tighter leading-7 text-sm font-medium text-slate-800">
            <p>Contamos con un equipo de profesionales altamente capacitados para
                brindar el mejor servicio a nuestros clientes.</p>
            <p>Trabajamos con las mejores marcas del mercado para ofrecer productos
                de alta calidad y garantía.</p>
        </div>

        <h2 className="text-3xl font-semibold tracking-tight mt-8 mb-4">
            ¡Gracias por elegirnos!
        </h2>
        <p>
            Si tienes alguna duda, sugerencia o comentario, no dudes en contactarnos. Estamos para ayudarte:
            <a href="https://discord.com"> Nuestro Discord</a>
        </p>

    </div>
}