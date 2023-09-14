import './styles.scss'
const VideoPlace = () => {
    return (
        <section className="video-container">
            <div className="video-play ">
            <iframe className= "video" src="https://www.youtube.com/embed/NSnkb1IAjbE?si=iGFNFLu1aKB1hcsV" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"/>
            </div>
        </section>
    )
}
export default VideoPlace ;