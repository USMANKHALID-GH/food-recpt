
import  style from '/src/css/container.module.css'
export  default  function Container({children}){
    return(
        <div className={style.mainContainer}>{children}</div>
    )
}