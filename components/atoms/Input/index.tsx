interface InputProps{
    label: string
    placeholder: string
}

export default function Input(props: InputProps) {
    const {label, placeholder,...nativeProps} = props;
    return(
        <>
       <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">{label}</label>
                            <input type="text" className="form-control rounded-pill text-lg" id={placeholder} name={placeholder}
                                aria-describedby="name" placeholder={`Enter your ${placeholder}`} {...nativeProps}/>
        </>
    )
}