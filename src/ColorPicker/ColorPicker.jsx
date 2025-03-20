import React, { useState } from 'react';
import styles from './ColorPicker.module.css';

function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");
    const [copied, setCopied] = useState(false);

    function handleColorChange(event) {
        setColor(event.target.value);
        setCopied(false); // Reset copied status when color changes
    }

    function handleCopyToClipboard() {
        navigator.clipboard.writeText(color).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset copy status after 2 sec
        });
    }

    return (
        <div className={styles.ComponentDiv}>
            <h1>ColorPicker Component</h1>
            <div 
                className={styles.ColorDiv} 
                style={{ backgroundColor: color }} 
                onClick={handleCopyToClipboard}
                title="Click to copy color code"
            >
                <label>Selected Color: {color}</label>
                {copied && <p style={{ fontSize: '1rem', color: 'lightgreen' }}>Copied!</p>}
            </div>
            <p>Select a Color</p>
            <input type="color" value={color} color='black' onChange={handleColorChange} />
        </div>
    );
}

export default ColorPicker;
