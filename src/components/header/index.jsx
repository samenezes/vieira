import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <span>Gabriel Vieira</span>
            <nav>
                <a href="">PROVA</a>
                <a href="">3C2</a>
                <a href="">09</a>
            </nav>
        </header>
    )    
}



export default Header