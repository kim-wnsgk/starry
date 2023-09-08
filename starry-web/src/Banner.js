import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';


function Banner() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.title} onClick={() => navigate('/')}>
                Starry day
            </div>
            <div className={styles.content}>
                <div className={styles.button}>
                    <Link to='/result'>별 관측지</Link>
                </div>
                <div className={styles.button}>
                    <Link to='/result'>별 관측지</Link>
                </div>
                <div className={styles.button}>
                    <Link to='/send'>천문학 소식</Link>
                </div>
            </div>
        </div>
    );
}

export default Banner;