const customButton = ({text,style,image, onPress,disabled}:CustomButtonProps)=>{
    return(
        <>
            <button className={style} onClick={onPress} disabled={disabled}>
                {image && <img src={image} alt={"IMG"}/>}
                {text}</button>
        </>
    )
}
export default customButton;