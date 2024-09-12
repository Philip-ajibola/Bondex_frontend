const customButton = ({text,style}:CustomButtonProps)=>{
    return(
        <>
            <button className={style}>{text}</button>
        </>
    )
}
export default customButton;