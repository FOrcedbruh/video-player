import styles from './Header.module.scss'
import { UploadButton } from '../../../features'

const Header: React.FC = () => {


    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>
                    Video Player
                </h1>
            </div>
            <UploadButton onClick={() => console.log("file uploaded")} width='200px' height='60px'/>
        </header>
    )
}

export { Header }