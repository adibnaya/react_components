import { useEffect, useRef, useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [ isOpen, setIsOpen ] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  function handleSelect(option) {
    onChange(option);
    setIsOpen(false);
  }

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value}>
        <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => handleSelect(option)}>
          {option.label}
        </div>
      </div>
    );
  });

  return (
    <div ref={divEl} className='w-48 relative'>
      <Panel
        className='flex justify-between items-center cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && (
        <Panel className='absolute top-full'>
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;