import { JsxElement } from "typescript";

type list = {
    menuName: string;
    menuHref: string;
    svg: JsxElement;
}
type Props = {
    menuList: list
}

export const menuDashboard = () => {
    return (
        <nav className="mt-6">
            <div>

            </div>
        </nav>
    );
}

const dashboardList = ({ menuList }: Props) => {
    return (
        <a
            className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"
            href={menuList.menuHref}
        >
            <span className="text-left">
                {menuList.svg}
            </span>
            <span className="mx-4 text-sm font-normal">{menuList.menuName}</span>
        </a>
    );
}