import React from "react";
import Banner from "../Banner";
import styles from "./Region.module.css";
import Starfield from "../component/Starfield";

function Region() {
    return (
        <div className={styles.container}>
            <Starfield />
            <Banner />
            <div className={styles.content}>
                <div className={styles.leftBanner}>
                    <div className={styles.title}>
                        별 관측지
                    </div>
                    <div className={styles.menus}>
                        <div className={styles.menu}>
                            인기 관측지
                        </div>
                        <div className={styles.menu}>
                            지역 검색 & 관측 지수
                        </div>
                        <div className={styles.menu}>
                            menu1
                        </div>
                        <div className={styles.menu}>
                            menu1
                        </div>

                    </div>
                </div>
                <div>
                    관측 지수 설명
                </div>
            </div>

        </div>
    );
}

export default Region;