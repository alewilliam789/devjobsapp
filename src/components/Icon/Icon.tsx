import styles from './styles.module.css'

interface Size {
    height: string,
    width: string
}

interface IconProps {
    bgColor: string,
    iconURL: string,
    iconSize: Size,
    logoSize: Size,
    borderRad: string,
    iconType: string,
    companyName: string,
}



export default function Icon({bgColor, iconURL, iconSize, logoSize, borderRad, iconType, companyName} : IconProps){


    return (
            <div className={styles[`icon-${iconType}`]} style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor : `${bgColor}`, height : `${logoSize.height}`, width : `${logoSize.width}`, borderRadius: `${borderRad}`}}>
                <img height={iconSize.height} width={iconSize.width} src={iconURL} alt={`${companyName} Logo`} />
            </div>
    )

}
