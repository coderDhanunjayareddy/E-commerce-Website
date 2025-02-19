import React, { useState, useRef, useEffect } from 'react';

function TooltipComponent() {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const tooltipRef = useRef(null);

  // Toggle the tooltip visibility when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (tooltipRef.current && !event.target.matches('.tooltip') && isTooltipVisible) {
        setTooltipVisible(false);
      }
    }

    // Add the event listener for clicks
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isTooltipVisible]);

  return (
    <div>
      <button
        className="tooltip"
        onClick={() => setTooltipVisible(!isTooltipVisible)}
      >
        Toggle Tooltip
      </button>

      {isTooltipVisible && (
        <div id="tooltip-box" ref={tooltipRef} style={{ display: 'block' }}>
          Tooltip Content
        </div>
      )}
    </div>
  );
}

export default TooltipComponent;
