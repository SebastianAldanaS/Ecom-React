import { TbHexagonLetterRFilled  } from "react-icons/tb";
import { FaCarSide, FaMapMarkedAlt } from "react-icons/fa";

export const FeatureGrid = () => {
    return <div className="grid grid-cols-2 gap-8 mt-6 mb-16 lg:grid-cols-4 lg:gap-5">
        <div className="flex item-center gap-6">
            <TbHexagonLetterRFilled size={40} className="text-slate-950" />

            <div className="space-y-1">
                <p className="font-semibold">Logos personalizados</p>
                <p className="text-sm">A un precio razonable</p>
            </div>
        </div>

        <div className="flex item-center gap-6">
            <FaMapMarkedAlt  size={40} className="text-slate-950" />

            <div className="space-y-1">
                <p className="font-semibold">Mapeos</p>
                <p className="text-sm">Con asesoramiento</p>
            </div>
        </div>

        <div className="flex item-center gap-6">
            <FaCarSide  size={40} className="text-slate-950" />

            <div className="space-y-1">
                <p className="font-semibold">Coches</p>
                <p className="text-sm">A pedido</p>
            </div>
        </div>
    </div>
}