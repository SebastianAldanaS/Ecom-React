import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <Link to="/" className="text-2xl font-bold tracking-tighter transition-all">
            <p className="hidden lg:block">
                Resu
                <span className="text-orange-600">
                    Gamer
                    </span>
                    Shop
            </p>

            <p className="flex text-4xl lg:hidden">
                <span className="-skew-x-6">R</span>
                <span className="text-orange-600 skew-x-6">G</span>
            </p>
        </Link>
    )
}