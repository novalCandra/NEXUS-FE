import Button from "../button/Button"

const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row md:items-center space-y-3 py-10 px-4 md:px-10 md:justify-between bg-paper">
            <h3 className="font-fredoka text-xl font-bold"><span className="bg-pink px-3 py-2 rounded-md border-2 border-black">V</span> iraOliv</h3>
            <span className="text-md font-fredoka font-medium md:hidden lg:text-base">A Calmer Way to Move Forward and Stay Motivated Vira Oliv</span>
            <div className="flex flex-row">
                <Button path="/login" type="button" variant="transparent" size="xs">Sign In</Button>
                <Button path="/register" type="button" variant="transparent" size="xs">create account</Button>
            </div>
        </footer>
    )
}

export default Footer