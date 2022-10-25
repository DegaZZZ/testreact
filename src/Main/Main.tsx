import './Main.css'

let link: string = "https://vk.com/video_ext.php?oid=-211941733&id=456239158&hash=40159766b0115fd1";

function broadcastLink(link: string): string {
    if (window.location.href === "http://localhost:3000/russian"){
        return "https://vk.com/video_ext.php?oid=-211941733&id=456239177&hash=320cbbbc09eb7482";
    }

    else if(window.location.href === "http://localhost:3000/intershum"){
        return "https://vk.com/video_ext.php?oid=-211941733&id=456239178&hash=fdd4cc8757face86";
    }

    else if(window.location.href === "http://localhost:3000/english"){
        return "https://vk.com/video_ext.php?oid=-211941733&id=456239179&hash=a3e3f73e33a58ff3";
    }

    else if(window.location.href === "http://localhost:3000/community"){
        return "https://vk.com/video_ext.php?oid=-211941733&id=456239179&hash=a3e3f73e33a58ff3";
    }
    return link;
}

function Main() {
    return (
        <div className="container-fluid main-container d-flex justify-content-center overflow-hidden px-0">
            <div className="player-wrapper" id="split-player-formula">
                <iframe className="iframe"
                        src={broadcastLink(link)}
                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture">
                </iframe>
                <h1>2022 Japan Grand Prix</h1>
                <div className="d-flex flex-row" id="box">
                    <a className="nav-link text-black" href="https://vk.com/f1free">VK Group</a>
                    <a className="nav-link text-black ms-2" href="https://t.me/f1tv_free">Telegram</a>
                </div>
            </div>
        </div>
    )
}

export default Main;
