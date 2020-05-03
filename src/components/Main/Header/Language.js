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
            <a
                onClick={() => setIsOpen(!isOpen)}
                className="dropdown-toggle header__nav-link"
                href="#"
            >EN</a>

            <ul
                className={`dropdown-menu header__dropdown-menu lang ${isOpen && 'show'}`}
            >
                <li onClick={() => console.log('dsafa')}><a href="#">English</a></li>
                <li><a href="#">Spanish</a></li>
                <li><a href="#">Russian</a></li>
            </ul>
        </div>
    );
};

export default Language;