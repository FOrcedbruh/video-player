import styles from './Player.module.scss'
import { useRef, useState } from 'react'
import { useVideoStore } from '../../../entities'
import defaultVideo from './../../../../public/videos/naturalVideo.mp4'

const Player: React.FC = () => {

    
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlay, setIsPlay] = useState<boolean>(false)
    const { video } = useVideoStore()

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
            <video loop ref={videoRef} className={styles.video}  autoPlay={true} src={video ? video.source : defaultVideo}></video>
            <section className={styles.controls}>
                <div className={styles.play} onClick={play}>{isPlay ? "Pause" : "Play"}</div>
                <div className={styles.fullscreen} onClick={fullScreenHandler}>Full screen</div>
            </section>
        </section>
    )
}

export { Player }