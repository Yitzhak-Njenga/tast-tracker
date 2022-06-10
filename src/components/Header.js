import PropTypes  from "prop-types"
const Header = ({title}) => {
    return (
        <header>

            <h1>{title}</h1>

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