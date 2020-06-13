import React, {useEffect, useState} from 'react';

const Language = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        document.querySelector('.body').addEventListener('click', e => {
            if (!e.target.classList.contains('lang')) {
                setIsOpen(false)
            }
        })
    }, []);
    return (
        <div className="dropdown header__lang">
            <span
                style={{cursor: 'pointer'}}
                onClick={() => setIsOpen(!isOpen)}
                className="dropdown-toggle header__nav-link"
            >EN</span>

            <ul
                className={`dropdown-menu header__dropdown-menu lang ${isOpen && 'show'}`}
            >
                <li onClick={() => console.log('dsafa')}>English</li>
                <li>Spanish</li>
                <li>Russian</li>
            </ul>
        </div>
    );
};

export default Language;
