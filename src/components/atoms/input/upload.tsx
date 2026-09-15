type uploadTypesInput = "file"
type typesUploadFile = {
    type: uploadTypesInput;
    id?: string;
}

const InputUpload = (props: typesUploadFile) => {
    const { type, id } = props
    return (
        <input type={type} id={id} className='absolute top-130 left-10 opacity-0 cursor-pointer' />
    )
}

export default InputUpload
