import { IUploadBtnProps } from '../model/types/IUploadFile';
import styles from './UploadButton.module.scss';



const UploadButton: React.FC<IUploadBtnProps>  = ({ text, onClick, width, height }) => {

    return (
        <button onClick={onClick} style={{'width': width, 'height': height}} className={styles.btn}>
            {text ? text : "Upload video"}
        </button>
    )
}

export { UploadButton };