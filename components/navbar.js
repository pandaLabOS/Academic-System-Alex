import Link from 'next/link';
import styles from '../styles/navbar.module.css'
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';


const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <Image
                    priority
                    src = "/logos/ABAC_FullCircle.png"
                    width={54}
                    height={55}
                    alt={"AU Logo"}
                />
                <div classname={styles.heading}>AU-DARS</div>

            </div>
            <links className={styles.buttonText_default}>
                <Link href = "/dean/home">
                    <a className={styles.buttonText}>
                        Home
                    </a>
                </Link>

                <Link href = "/dean/history">
                    <a className={styles.buttonText_default}>
                        History
                    </a>
                </Link>
            </links>

        </div>
    );
}

export default Navbar;