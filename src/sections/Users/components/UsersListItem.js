const UsersListItem = props => {
    return (
        <li className={`bg-${props.user.gender === 'male' ? 'blue' : 'pink'}`}>
            <img
            src={props.user.picture.medium}
            alt={props.user.name.first + ' ' + props.user.name.last}
            />
            <h3>{props.user.name.title} {props.user.name.first} {props.user.name.last}</h3>
            <p>Email: {props.user.email}</p>
        </li>
    )
}

export default UsersListItem