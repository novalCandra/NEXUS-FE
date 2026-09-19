import { Pencil, Trash } from "lucide-react";
import AsidSidebar from "../../../../components/atoms/aside/Aside";
import Button from "../../../../components/atoms/button/Button";
export default function taskpageUsers() {
    return (
        <div className="flex flex-1">
            <AsidSidebar />
            <div className="conatiner bg-paper min-h-screen w-full px-5 py-5">
                <div className="flex flex-col md:flex-row justify-between space-y-5 md:items-center">
                    <div className="flex flex-col space-y-2">
                        <span className="uppercase font-fredoka text-gray-600">task system</span>
                        <h2 className="font-fredoka uppercase text-black text-4xl font-bold">make progress visible.</h2>
                        <span className="font-fredoka">Lorem ipsum dolor sit, amet consectetur adipisicing elit</span>
                    </div>
                    <Button type="button" size="sm" variant="accentPinkColors">New Task</Button>
                </div>

                <div className="flex flex-col md:flex-col lg:flex-row justify-center mx-auto mt-8 space-y-5 md:space-x-9">
                    <div className="flex flex-col w-95 h-100 md:w-120 md:h-110 bg-white border-2 border-black shadow-black-200">
                        <div className="bg-yellow w-full px-5 py-5 border-b-4 border-black">
                            <h2 className="font-fredoka text-xl font-semibold">To do</h2>
                        </div>
                        <div className="flex flex-col w-80 md:w-90 h-36 mx-auto border-2 border-black mt-3 md:mt-5 justify-between shadow-black-200">
                            <div className="flex flex-row justify-between items-center px-4 py-2">
                                <span className="font-fredoka font-semibold text-lg line-clamp-2 w-40">Belajar coding React js dan next js</span>
                                <div className="flex flex-row gap-4">
                                    <button className="border-2 border-gray-500 w-10 h-9"><Pencil size={20} className="text-purple size-5 mx-auto shrink-0" /></button>
                                    <button className="border-2 border-gray-500 w-10 h-9"><Trash size={20} className="text-red-400 size-5 mx-auto shrink-0" /></button>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center px-4 py-2">
                                <button className="w-20 h-10 font-fredoka border-2 border-gray-500">normal</button>
                                <span className="font-fredoka font-bold text-gray-600">Today</span>
                            </div>

                        </div>
                        <div className="flex flex-col w-80 md:w-90 h-36 mx-auto border-2 border-black mt-3 md:mt-5 justify-between shadow-black-200">
                            <div className="flex flex-row justify-between items-center px-4 py-2">
                                <span className="font-fredoka font-semibold text-lg line-clamp-2 w-40">Belajar coding React js dan next js</span>
                                <div className="flex flex-row gap-4">
                                    <button className="border-2 border-gray-500 w-10 h-9"><Pencil size={20} className="text-purple size-5 mx-auto shrink-0" /></button>
                                    <button className="border-2 border-gray-500 w-10 h-9"><Trash size={20} className="text-red-400 size-5 mx-auto shrink-0" /></button>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center px-4 py-2">
                                <button className="w-20 h-10 font-fredoka border-2 border-gray-500">normal</button>
                                <span className="font-fredoka font-bold text-gray-600">Today</span>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col w-95 h-100 md:w-120 md:h-110 bg-white border-2 border-black shadow-black-200">
                        <div className="bg-yellow w-full px-5 py-5 border-b-4 border-black">
                            <h2 className="font-fredoka text-xl font-semibold">To do</h2>
                        </div>
                        <div className="flex flex-col w-80 md:w-90 h-36 mx-auto border-2 border-black mt-3 md:mt-5 justify-between shadow-black-200">
                            <div className="flex flex-row justify-between items-center px-4 py-2">
                                <span className="font-fredoka font-semibold text-lg line-clamp-2 w-40">Belajar coding React js dan next js</span>
                                <div className="flex flex-row gap-4">
                                    <button className="border-2 border-gray-500 w-10 h-9"><Pencil size={20} className="text-purple size-5 mx-auto shrink-0" /></button>
                                    <button className="border-2 border-gray-500 w-10 h-9"><Trash size={20} className="text-red-400 size-5 mx-auto shrink-0" /></button>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center px-4 py-2">
                                <button className="w-20 h-10 font-fredoka border-2 border-gray-500">normal</button>
                                <span className="font-fredoka font-bold text-gray-600">Today</span>
                            </div>

                        </div>
                        <div className="flex flex-col w-80 md:w-90 h-36 mx-auto border-2 border-black mt-3 md:mt-5 justify-between shadow-black-200">
                            <div className="flex flex-row justify-between items-center px-4 py-2">
                                <span className="font-fredoka font-semibold text-lg line-clamp-2 w-40">Belajar coding React js dan next js</span>
                                <div className="flex flex-row gap-4">
                                    <button className="border-2 border-gray-500 w-10 h-9"><Pencil size={20} className="text-purple size-5 mx-auto shrink-0" /></button>
                                    <button className="border-2 border-gray-500 w-10 h-9"><Trash size={20} className="text-red-400 size-5 mx-auto shrink-0" /></button>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center px-4 py-2">
                                <button className="w-20 h-10 font-fredoka border-2 border-gray-500">normal</button>
                                <span className="font-fredoka font-bold text-gray-600">Today</span>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col w-95 h-100 md:w-120 md:h-110 bg-white border-2 border-black shadow-black-200">
                        <div className="bg-yellow w-full px-5 py-5 border-b-4 border-black">
                            <h2 className="font-fredoka text-xl font-semibold">To do</h2>
                        </div>
                        <div className="flex flex-col w-80 md:w-90 h-36 mx-auto border-2 border-black mt-3 md:mt-5 justify-between shadow-black-200">
                            <div className="flex flex-row justify-between items-center px-4 py-2">
                                <span className="font-fredoka font-semibold text-lg line-clamp-2 w-40">Belajar coding React js dan next js</span>
                                <div className="flex flex-row gap-4">
                                    <button className="border-2 border-gray-500 w-10 h-9"><Pencil size={20} className="text-purple size-5 mx-auto shrink-0" /></button>
                                    <button className="border-2 border-gray-500 w-10 h-9"><Trash size={20} className="text-red-400 size-5 mx-auto shrink-0" /></button>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center px-4 py-2">
                                <button className="w-20 h-10 font-fredoka border-2 border-gray-500">normal</button>
                                <span className="font-fredoka font-bold text-gray-600">Today</span>
                            </div>

                        </div>
                        <div className="flex flex-col w-80 md:w-90 h-36 mx-auto border-2 border-black mt-3 md:mt-5 justify-between shadow-black-200">
                            <div className="flex flex-row justify-between items-center px-4 py-2">
                                <span className="font-fredoka font-semibold text-lg line-clamp-2 w-40">Belajar coding React js dan next js</span>
                                <div className="flex flex-row gap-4">
                                    <button className="border-2 border-gray-500 w-10 h-9"><Pencil size={20} className="text-purple size-5 mx-auto shrink-0" /></button>
                                    <button className="border-2 border-gray-500 w-10 h-9"><Trash size={20} className="text-red-400 size-5 mx-auto shrink-0" /></button>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center px-4 py-2">
                                <button className="w-20 h-10 font-fredoka border-2 border-gray-500">normal</button>
                                <span className="font-fredoka font-bold text-gray-600">Today</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
