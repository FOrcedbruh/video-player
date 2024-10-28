import styles from './Player.module.scss'
import video from './../../../../public/videos/naturalVideo.mp4'
import { useRef, useState } from 'react'

const Player: React.FC = () => {

    
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlay, setIsPlay] = useState<boolean>(false)

    const play = () => {
        if (isPlay) {
            setIsPlay(false)
            videoRef.current?.pause()
            return
        } else {
            setIsPlay(true)
            videoRef.current?.play()
            return
        }
    }

    const fullScreenHandler = () => {
        videoRef.current?.requestFullscreen()
    }
    

    return (
        <section className={styles.player}>
            <video loop ref={videoRef} className={styles.video}  autoPlay={true} src={video}></video>
            <section className={styles.controls}>
                <div className={styles.play} onClick={play}>{isPlay ? "Pause" : "Play"}</div>
                <div className={styles.fullscreen} onClick={fullScreenHandler}>Full screen</div>
            </section>
        </section>
    )
}

export { Player }