import {BsFillMoonStarsFill} from 'react-icons/bs'
export default function Navbar(){
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-sm px-8 md:px-20 lg:px-40 py-4 flex justify-between items-center z-50">
            <h1 className="font-ubuntu text-lg">@ret7020</h1>
            <ul className="flex items-center">
                <li><BsFillMoonStarsFill /></li>
                <span className="px-4 py-2 bg-gradient-to-r from-teal-500 text- to-blue-500 bg-teal-300 rounded-md ml-8 text-white cursor-pointer">Russian</span>
            </ul>
        </nav>
    )
}