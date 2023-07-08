import React, { useState, useEffect } from 'react';
import { BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import "./imggen.css"

const ImgGen = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = () => {
    // const randomImageUrl = 'https://source.unsplash.com/random';
    const randomImageUrl = 'https://random.imagecdn.app/500/150';

    
    setImageUrl(randomImageUrl);
  };

  const handleShareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const handleShareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const handleShareWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  return (
    <div className='img-gen'>
      <img src={imageUrl} alt='Please wait' style={{ display: 'block', margin: '0 auto' }} />
      
      <div className='buttons'>
        <button className='social-media-btn' onClick={handleShareFacebook}><BsFacebook/></button>
        <button className='social-media-btn' onClick={handleShareTwitter}><BsTwitter/></button>
        <button className='social-media-btn' onClick={handleShareWhatsApp}><BsWhatsapp/></button>
      </div>
    </div>
  );
};

export default ImgGen;
