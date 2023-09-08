import React, { useState, useEffect } from 'react';
import styles from './Starfield.module.css';

function Starfield() {
    const [stars, setStars] = useState([]);

    const starImages = [
        './star/star1.png',
        './star/star2.png',
        './star/star3.png',
        './star/star4.png',
        './star/star5.png',
    ];

    useEffect(() => {
        const createStar = (x, y) => {
            const randomImage = starImages[Math.floor(Math.random() * starImages.length)];

            const star = (
                <div
                    key={`${x}-${y}-${Date.now()}`}
                    className={styles.star}
                    style={{
                        color: 'white',
                        top: `${y}px`,
                        left: `${x}px`,
                        backgroundImage: `url(${randomImage})`, // 랜덤 이미지 설정
                    }}
                />
            );

            // 별이 생성된 후 3초 후에 삭제
            setTimeout(() => {
                setStars((prevStars) => prevStars.filter((prevStar) => prevStar.key !== star.key));
            }, 500);

            return star;
        };

        const onMouseMove = (e) => {
            const x = e.clientX;
            const y = e.clientY;

            // 이전 별과 새로운 별을 합쳐서 업데이트
            setStars((prevStars) => [...prevStars, createStar(x, y)]);
        };

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <div className={styles.starfield}>{stars}</div>
    );
}

export default Starfield;
