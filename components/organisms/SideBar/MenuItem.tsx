import cx from "classnames";

interface MenuItemProps{
    title: string
    icon: string
    active?: boolean

}

export default function MenuItem(props: MenuItemProps) {
const {title, icon, active} = props;
const classItem = cx({
    'item' : true,
    'mb-30': true,
    'active': active
}
)
    return(
        <div className={classItem}>
            <div className="me-3">
            <img src={`/icon/${icon}.svg`} width={25} height={25} />
            </div>
        <p className="item-title m-0">
            <a href="" className="text-lg text-decoration-none">{title}</a>
        </p>
    </div>
    )
}