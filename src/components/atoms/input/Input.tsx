type InputInput = {
    type : "text" | "password" | "email";
    id : string;
    name : string;
    value? : string;
    placeholder : string;
}
const Input = (props : InputInput) => {
    const {id, name,type, value, placeholder} = props;
    return (
        <input type={type} name={id} id={name} value={value} placeholder={placeholder} className="w-80 h-10 px-4 py-4 bg-white ring-2 ring-black focus:outline-none focus:ring-4 focus:ring-pink focus:disabled:ring-red-400 invalid:bg-pink-300 invalid:text-white invalid:caret-pink rounded-md font-semibold font-fredoka" />
    )
}

export default Input