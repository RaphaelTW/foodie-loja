import React from 'react';
import Logo from "../../assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
    return (
        <>
            <div className="shadow-md
             bg-white dark:bg-gray-900 dark:text-white duration-200">
                <div className="container py-4 sm:py-0">
                    <div className="flex justify-between items-center">
                        <div>
                            <a href="#" className="flex justify-center items-center gab-2 text-2xl sm:text-3xl font-bold">
                                <img src={Logo} alt="Logo da Loja"
                                    className="w-10" />
                                Zona Foodie
                            </a>
                        </div>
                        <div>
                            <ul className="hidden sm:flex gap-4">
                                <li>
                                    <a href="#"
                                        className="inline-block py-4 px-4
                                    hover:text-primary">
                                        Início
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="inline-block py-4 px-4
                                    hover:text-primary">
                                        Produtos
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="inline-block py-4 px-4
                                    hover:text-primary">
                                        Contatos
                                    </a>
                                </li>
                            </ul>
                            <button className="bg-gradient-to-r from-primary
                            to-secondary text-white px-4 py-1
                            rounded-full hover:scale-105 duration-300 flex
                            items-center gap-2">
                                Order
                                <FaCartShopping className="text-xl text-white
                                drop-shadow cursor-pointer" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar