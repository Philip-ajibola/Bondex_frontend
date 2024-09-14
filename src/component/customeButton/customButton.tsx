const customButton = ({text,style,image, onPress}:CustomButtonProps)=>{
    return(
        <>
            <button className={style} onClick={onPress}>
                {image && <img src={image} alt={"IMG"}/>}
                {text}</button>
        </>
    )
}
export default customButton;