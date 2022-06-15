import PropTypes  from "prop-types"
import Button from "./Button"
const Header = ({title,onAdd,showAdd}) => {
    // const onClick = () => {
    //         alert("clicked")
    // }
    return (
        <header className="header">

            <h1>{title}</h1>
            <Button color='green' text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
            

        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}
Header.prototypes = {
    title:PropTypes.string.isRequired

}

 // css in js
// const headingStyle = {
//     color:'red',
//     background:'yellow'
// }

export default Header