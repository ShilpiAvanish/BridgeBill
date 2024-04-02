import React, { useState, useRef, useEffect } from 'react';
import "/src/CompenentsCSS/Dropdown.css";
import englishFlag from '../FlagImages/EnglishFlag.png';
import spanishFlag from '../FlagImages/SpanishFlag.png';
import MandarinFlag from '../FlagImages/MandarinFlag.png';
import ArabicFlag from '../FlagImages/ArabicFlag.png';



type DropdownProps = {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
};

const flags = {
  English: englishFlag,
  Spanish: spanishFlag,
  Mandarin: MandarinFlag,
  Arabic: ArabicFlag,

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
        onMouseLeave={() => setIsOpen(false)}
        className="dropdown-toggle"
      >
        {/* Display the selected language and flag */}
        <img src={flags[selected]} alt={`${selected} flag`} />
        {selected}
      </button>
      {isOpen && (
        <ul
          className="dropdown-menu"
          onMouseOver={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {options.map((option, index) => (
            <li key={index} className="dropdown-item" onClick={() => handleOptionClick(option)}>
              {/* Display the flag next to the language name */}
              <img src={flags[option]} alt={`${option} flag`} />
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
