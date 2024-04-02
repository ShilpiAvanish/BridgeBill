import React, { useState, useRef, useEffect } from 'react';
import "/src/CompenentsCSS/Dropdown.css";


type DropdownProps = {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (value: string) => {
    onSelect(value);
  };
  

  return (
    <div className="dropdown" ref={toggleRef}>
      <button
        onMouseOver={() => setIsOpen(true)}
        className="dropdown-toggle"
      >
        {selected}
      </button>
      {isOpen && (
  <ul
    className="dropdown-menu"
    onMouseOver={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
  >
    {options.filter(option => option !== selected).map((option, index) => (
      <li key={index} className="dropdown-item" onClick={() => handleOptionClick(option)}>
        {option}
      </li>
    ))}
  </ul>
)}
    </div>
  );
};

export default Dropdown;