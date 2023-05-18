import cStyles from '../btns.module.css';
import styles from './DismissBtn.module.css';
import React from 'react';


const DismissBtn = (props: any) => {
    const { state, active, onClick } = props;

    const getStyleClass = () => {
        switch (state) {
            case "dismiss":
                return styles.dismiss;
            case "delete":
                return styles.delete;
            default:
                return;
        }
    };

    const handleClick = () => {
        onClick(state);
    };

    return (
        <button className={`${cStyles.btn} ${styles.btn} ${active ? styles.active : ''}`}
            aria-label='Delete' title='Delete' onClick={handleClick}
        >
            <svg className={`${cStyles.btn_icon} ${styles.btn_icon}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path className={`${cStyles.icon_path} ${styles.icon_path} ${getStyleClass()}`} fillRule="evenodd" d="M12,2 C17.5229861,2 22,6.47701386 22,12 C22,17.5229861 17.5229861,22 12,22 C6.47701386,22 2,17.5229861 2,12 C2,6.47701386 6.47701386,2 12,2 Z M13.4142136,12 L16.2426407,9.17157288 C16.633165,8.78104858 16.633165,8.1478836 16.2426407,7.75735931 C15.8521164,7.36683502 15.2189514,7.36683502 14.8284271,7.75735931 L12,10.5857864 L9.17157288,7.75735931 C8.78104858,7.36683502 8.1478836,7.36683502 7.75735931,7.75735931 C7.36683502,8.1478836 7.36683502,8.78104858 7.75735931,9.17157288 L10.5857864,12 L7.75735931,14.8284271 C7.36683502,15.2189514 7.36683502,15.8521164 7.75735931,16.2426407 C8.1478836,16.633165 8.78104858,16.633165 9.17157288,16.2426407 L12,13.4142136 L14.8284271,16.2426407 C15.2189514,16.633165 15.8521164,16.633165 16.2426407,16.2426407 C16.633165,15.8521164 16.633165,15.2189514 16.2426407,14.8284271 L13.4142136,12 Z" />
            </svg>
        </button>
    );
};


export default DismissBtn;