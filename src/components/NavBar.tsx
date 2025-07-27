import '../styles/global.css'
import styles from '../styles/NavBar.module.css'

export const NavBar: React.FC = () => {
    return (
        <header className={styles.NavBar}>
            <img className={styles.Logo} src='/assets/logo.png' alt='logo'/>
            <nav className={styles.Nav}>
                <a className={styles.NavElem} href="#home">Home</a>
                <a className={styles.NavElem} href="#about">About</a>
                <a className={styles.NavElem} href="#projects">Projects</a>
                <a className={styles.NavElem} href="#skills">Skills</a>
                <a className={styles.NavElem} href="#services">Services</a>
                |
            </nav>
            <button className={styles.Button} onClick={() => {
                window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
            }}>
                Get Started
            </button>
        </header>
    )
}