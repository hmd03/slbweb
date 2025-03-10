import React, { useState } from 'react';

const Toolbar: React.FC = () => {
    const fontSizeArr = ['8px', '9px', '10px', '12px', '14px', '16px', '20px', '24px', '32px', '42px', '54px', '68px', '84px', '98px'];
    
    // 색상 배열 추가
    const colorArr = [
        'red', 'green', 'blue', 'yellow', 'pink', 'orange', 'purple', 'cyan', 'white', 'magenta', 
        'lime', 'teal', 'navy', 'maroon', 'olive', 'silver', 'gold', 'brown', 'black'
    ];

    // 상태 관리
    const [fontSize, setFontSize] = useState('12px');
    const [textColor, setTextColor] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('');

    return (
        <div id="toolbar">
            <select className="ql-size" value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
                {fontSizeArr.map((val) => (
                    <option value={val} key={val}>
                        {val.replace(/[^0-9]/g, "")}
                    </option>
                ))}
            </select>
            <button className="ql-bold" />
            <button className="ql-italic" />
            <button className="ql-underline" />
            <button className="ql-strike" />
            <button className="ql-blockquote" />
            <button className="ql-list" value="ordered" />
            <button className="ql-list" value="bullet" />
            <button className="ql-indent" value="-1" />
            <button className="ql-indent" value="+1" />
            <button className="ql-link" />
            <button className="ql-image" />
            <select className="ql-align">
                <option value="" />
                <option value="left" />
                <option value="center" />
                <option value="right" />
                <option value="justify" />
            </select>
            <select className="ql-color" value={textColor} onChange={(e) => setTextColor(e.target.value)}>
                <option value="" />
                {colorArr.map((color) => (
                    <option value={color} key={color}>
                        {color}
                    </option>
                ))}
            </select>
            <select className="ql-background" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)}>
                <option value="" />
                {colorArr.map((color) => (
                    <option value={color} key={color}>
                        {color}
                    </option>
                ))}
            </select>
            <button className="ql-clean" />
        </div>
    );
};

export default Toolbar;
