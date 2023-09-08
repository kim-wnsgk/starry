import React from 'react';

import styles from './Main.module.css'
import Starfield from './component/Starfield';

function Main() {
    return (
        <div className={styles.container} style={{ backgroundImage: `url('./mainstar.jpg')` }}>
            <Starfield />
            <div className={styles.content} >
                <div className={styles.banner}>
                    <div className={styles.title}>
                        <div className={styles.mainTitle}>
                            Starry day
                        </div>
                        <div className={styles.subTitle}>
                            별 보기 좋은 날
                        </div>
                    </div>
                    <div className={styles.menus}>
                        <div className={styles.menu}>
                            first link
                        </div>
                        <div className={styles.menu}>
                            second link
                        </div>
                        <div className={styles.menu}>
                            first link
                        </div>
                        <div className={styles.menu}>
                            first link
                        </div>
                    </div>

                </div>
                <div className={styles.starAni}>

                </div>

            </div>
            {/* <footer>
                사진: <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/-cKXtsJWU-I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>의<a href="https://unsplash.com/ko/@jareeign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Reign Abarintos</a>
            </footer> */}
        </div>
    );
}

export default Main;