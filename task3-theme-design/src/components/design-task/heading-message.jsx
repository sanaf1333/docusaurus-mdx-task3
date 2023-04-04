import React from "react";
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';
 
export const HeadingTag = ({ children }) => {
    const { colorMode } = useColorMode();
    const isDarkTheme = colorMode === 'dark';
    return (
        <p className={isDarkTheme ? styles.textColorDark : styles.textColor} style={{fontWeight: "bold", fontSize: 20, fontFamily: "sans-serif", letterSpacing: 1.5 }} >
            {children}
        </p>
    );
};

export const TextTag = ({ children }) => {
    const { colorMode } = useColorMode();
    const isDarkTheme = colorMode === 'dark';
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <img width={60} height={60} src="https://img.icons8.com/bubbles/50/null/brown-hair-lady-window.png" />
                <p className={isDarkTheme ? styles.TextColorDark : styles.TextColor} style={{ margin: 'auto', fontSize: 18 }}>{children}</p>
            </div>
            <img width={50} height={50} src="https://img.icons8.com/ios-filled/50/null/hearts.png" />
        </div>
    );
};

export const VideoLabel = ({ children }) => {
    const { colorMode } = useColorMode();
    const isDarkTheme = colorMode === 'dark';
    return (
        <div
        className={isDarkTheme ? styles.backgroundColorDark : styles.backgroundColor}
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                height: '150px',
                width: '500px',
                borderRadius: '30px',
                position: 'relative',
                zIndex: 2,
                marginBottom: '-65px',
                marginLeft: '124px',
            }}
        >
            {children}
        </div>
    );
};