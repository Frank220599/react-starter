import React, {useEffect, useState} from 'react';
import 'react-photoswipe/lib/photoswipe.css';
import {PhotoSwipe, PhotoSwipeGallery} from "react-photoswipe";

const GalleryTabContent = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const images = document.querySelectorAll('.pswp-thumbnail');
        images.forEach(image => {
            image.className = 'col-12 col-sm-6 col-xl-4';
            document.querySelector('.gallery > .row').append(image)
        })
    }, []);
    let items = [
        {
            src: 'http://lorempixel.com/1200/900/sports/1',
            thumbnail: 'http://lorempixel.com/120/90/sports/1',
            w: 1200,
            h: 900,
            title: 'Image 1'
        },
        {
            src: 'http://lorempixel.com/1200/900/sports/2',
            thumbnail: 'http://lorempixel.com/120/90/sports/2',
            w: 1200,
            h: 900,
            title: 'Image 2'
        }
    ];
    const getThumbnailContent = (item) => {
        return (
            <figure>
                <img src={item.src}/>
            </figure>
        );
    }
    return (
        <div className="gallery">
            <PhotoSwipe
                isOpen={isOpen}
                items={items}
                onClose={() => setIsOpen(false)}
            />
            <div className="row">
                <PhotoSwipeGallery items={items} thumbnailContent={getThumbnailContent}/>
            </div>
        </div>
    );
};

export default GalleryTabContent;