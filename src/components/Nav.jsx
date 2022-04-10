import './navbar.css'
export const Nav = ({image ,lable})=>{
   
    return(

        <div className="navbar">
            <img src={image} alt=""></img>
            <b>{lable}</b>
        </div>
    )
}