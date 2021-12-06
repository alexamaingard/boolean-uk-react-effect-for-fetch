import '../../../styles.css'

const ArtListItem = props => {
    return (
        <li key={props.index}>
            <div className="frame">
                <img src={`https://www.artic.edu/iiif/2/${props.artwork.image_id}/full/843,/0/default.jpg`} alt={props.artwork.title} />
            </div>
            <h3>{props.artwork.title}</h3>
            <p>Artist: {props.artwork.artist_title? props.artwork.artist_title: 'unknown'}</p>
            <h4>Artistic Subjects:</h4>
            <ul>
                {props.artwork.classification_titles.map(classification => {
                return (
                    <li>{classification}</li>
                )
                })}
            </ul>
        </li>
    )
}

export default ArtListItem