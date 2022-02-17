import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {useNavigate} from 'react-router-dom'
import { ButtonTwo } from './ButtonTwo';

function HeroSection() {

    const navigate = useNavigate();
    const onClick1 = () => {
        navigate("BriefArrange")
    }
    const onClick2 = () => {
      navigate("SignAndLog")
  }

  return (
    <div className='hero-container'>
      <video src='\videos\homepage.mp4' playsInline autoPlay muted loop className='hero-video'></video>
      <h1>Seek events around you?</h1>
      <p>Let's start from here</p>
      <div className='hero-btns'>
        <Button

          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={onClick1} 
    
        >
          Brief Events Table
        </Button>
        <ButtonTwo
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          See More Details <i className='far fa-play-circle' />
        </ButtonTwo>
      </div>
    </div>
  );
}

export default HeroSection;