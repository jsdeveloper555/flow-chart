import styles from './Popup.module.css';
import React from 'react';


const Popup = (props: any) => {
    const { onSelect, onClose } = props;

    const handleSelect = (key: number) => {
        onSelect(key);
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <>
            <div className={styles.overlay} onClick={handleClose}></div>
            <div className={styles.popup}>
                <h2 className={styles.popup_title}>Select</h2>
                <div className={styles.btns_wrapper}>
                    <button className={`${styles.popup_btn} ${styles.category_btn}`}
                        onClick={() => handleSelect(0)}
                    >
                        Group 1
                    </button>
                    <button className={`${styles.popup_btn} ${styles.service_btn}`}
                        onClick={() => handleSelect(1)}
                    >
                        Group 2
                    </button>
                </div>
            </div>
        </>
    );
};


export default Popup;