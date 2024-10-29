import { ChangeEvent, useEffect, useRef, useState } from 'react'
import styles from './UploadModal.module.scss'
import { IModalProps } from '../model/types/IModalProps'
import { UploadButton } from '../../UploadButton/ui/UploadButton'
import { useVideoStore } from '../../../entities'



export const UploadModal: React.FC<IModalProps> = ({ setModal }) => {

    const [videoFile, setVideoFile] = useState<File | null>(null)
    const { setVideo } = useVideoStore()


    const modalRef = useRef<HTMLDivElement>(null)
    const filepickerRef = useRef<HTMLInputElement>(null)


    const clickOutside = (e: any) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setModal(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", clickOutside)

        return () => {
            document.removeEventListener("mousedown", clickOutside)
        }
    }, [])

    const filepickerHandler = () => {
        filepickerRef.current?.click()
    }

    const selectFiles = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setVideoFile(e.target.files[0])
            console.log(e.target.files[0])
        } else {
            console.log("Files not selected")
        }
    }

    const confirmFile = () => {
        if (videoFile) {
            const videoSrc = URL.createObjectURL(videoFile)
            setVideo({
                title: videoFile.name,
                source: videoSrc
            })
        } else {
            return
        }
    }
    



    return (
        <div className={styles.aura}>
            <div ref={modalRef} className={styles.modal}>
                <h2>Select <span>video</span> from local machine</h2>
                {videoFile ? <div>
                    <p>{videoFile.name}</p>
                    <UploadButton onClick={confirmFile} text='Подтвердить' width='200px' height='40px'/>
                </div> : <div>
                    <input onChange={e => selectFiles(e)} className={styles.hidden} ref={filepickerRef} type="file" accept='video/*'/>
                    <UploadButton onClick={filepickerHandler} text='Upload video' width='200px' height='40px'/>
                </div>}
            </div>
        </div>
    )
}