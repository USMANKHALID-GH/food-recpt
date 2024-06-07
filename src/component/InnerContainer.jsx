import  style from '/src/css/innerContainer.module.css'
export  default function InnerContainer({children}){
    return <div className={style.innerContainer}>{children}</div>
}