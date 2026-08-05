const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row md:items-center space-y-3 py-10 px-5 md:px-15 md:justify-between bg-paper">
            <h3 className="font-fredoka text-xl"><span className="bg-pink px-3 py-2 rounded-md border-2 border-black">V</span> iraOliv</h3>
            <span className="text-md font-fredoka">A calmer way to move forward · 2024</span>
            <div className="flex flex-row gap-3">
                <button type="button" className="uppercase font-fredoka cursor-pointer">sign in</button>
                <button type="button" className="uppercase font-fredoka">create account</button>
            </div>
        </footer>
    )
}

export default Footer