"use client"

import React, { useState, useRef, useEffect } from 'react';

const OverflowBox = ({ children }) => {
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [hiddenItems, setHiddenItems] = useState([]);
    const containerRef = useRef(null);
    const childRefs = useRef([]);

    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            let totalChildWidth = 0;
            let overflowItems = [];

            React.Children.forEach(children, (child, index) => {
                const childWidth = childRefs.current[index]?.offsetWidth || 0;
                totalChildWidth += childWidth;
                if (totalChildWidth > containerWidth) {
                    overflowItems.push(child);
                }
            });

            if (overflowItems.length > 0) {
                setIsOverflowing(true);
                setHiddenItems(overflowItems);
            } else {
                setIsOverflowing(false);
                setHiddenItems([]);
            }
        }
    }, [children]);

    return (
        <div ref={containerRef} style={{ position: 'relative', overflow: 'hidden', display: 'flex' }}>
            {React.Children.map(children, (child, index) => (
                <div ref={(el) => (childRefs.current[index] = el)}>
                    {child}
                </div>
            ))}
            {isOverflowing && (
                <div style={{ position: 'absolute', right: 0, top: 0 }}>
                    <button onClick={() => setIsOverflowing(false)}>▼ dadadasd</button>
                    {!isOverflowing && (
                        <div style={{ position: 'absolute', right: 0, top: '100%' }}>
                            {hiddenItems.map((item, index) => (
                                <div key={index}>{item}</div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default OverflowBox;