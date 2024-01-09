import styles from './Header.module.css'
import IgniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return(
        <header className={styles.header}>
            <img src={IgniteLogo} alt="" />
            <h1 >Ignite Feed</h1>
        </header>
    )
}