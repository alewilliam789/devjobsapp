

interface IconProps {
    bgColor: string,
    iconURL: string
}



export default function Icon({bgColor, iconURL} : IconProps){


    return (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor : `${bgColor}`, height : '50px', width : '50px', borderRadius: "15px"}}>
                <img src={iconURL}/>
            </div>
    )

}
