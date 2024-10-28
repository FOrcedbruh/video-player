import styles from './Header.module.scss'
import { UploadButton } from '../../../features'
import { IHeaderProps } from '../model/types/IHeaderProps'

const Header: React.FC<IHeaderProps> = ({ setModal }) => {


    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>
                    Video Player
                </h1>
            </div>
            <UploadButton onClick={() => setModal(true)} width='200px' height='60px'/>
        </header>
    )
}

export { Header }