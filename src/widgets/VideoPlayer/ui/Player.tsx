import styles from './Player.module.scss'
import { useRef, useState } from 'react'
import { useVideoStore } from '../../../entities'
import defaultVideo from './../../../../public/videos/naturalVideo.mp4'
import skipIcon from './../../../../public/icons/nextIcon.svg'
import fullscreenIcon from './../../../../public/icons/fullIcon.svg'
import pauseIcon from './../../../../public/icons/pauseIcon.svg'
import playIcon from './../../../../public/icons/playIcon.svg'

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

    const forward = (seconds: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime += seconds
        }   
    }

    const backward = (seconds: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime -= seconds
        }   
    }
    

    return (
        <section className={styles.player}>
            <h3>{video ? video.title : ""}</h3>
            <video onClick={play} loop ref={videoRef} className={styles.video}  autoPlay={true} src={video ? video.source : defaultVideo}></video>
            <section className={styles.controls}>
                <div className={styles.skip} onClick={() => backward(5)}><img style={{"rotate": '180deg'}} src={skipIcon} alt='' width={20} height={20}/></div>
                <div className={styles.play} onClick={play}><img src={isPlay ? pauseIcon : playIcon} width={20} height={20} alt="" /></div>
                <div className={styles.skip} onClick={() => forward(5)}><img src={skipIcon} alt='' width={20} height={20}/></div>
                <div className={styles.fullscreen} onClick={fullScreenHandler}><img src={fullscreenIcon} width={20} height={20} alt="" /></div>
            </section>
        </section>
    )
}

export { Player }