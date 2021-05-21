function ImageCard(props) {
    return (
        <>
            <h2>{props.subject}</h2>
            <img src={`https://source.unsplash.com/1600x900/?${props.subject}`} alt={props.subject}/>
        </>
    );
}

export default ImageCard;