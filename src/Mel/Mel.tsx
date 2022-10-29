import './Mel.css'

function Mel(props: any) {
    return (
        <div className="container-fluid broad-container d-flex justify-content-center overflow-hidden px-0">
            <div className="player-wrapper wrap" id="split-player-formula">
                <iframe className="iframebroad"
                        src={props.link}
                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture">
                </iframe>
                <h1 className={"text-size"}>{props.title}</h1>
                <div className="d-flex flex-row" id="box">
                    <a className="nav-link" href="https://vk.com/f1free">VK Group</a>
                    <a className="nav-link ms-2" href="https://t.me/f1tv_free">Telegram</a>
                </div>
            </div>
            <iframe className="iframechat"
                    src="https://www.twitch.tv/embed/jesusAVGN/chat?parent=localhost">
            </iframe>
        </div>
    )
}

export default Mel;
