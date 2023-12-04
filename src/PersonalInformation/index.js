import './PersonalInformation.css'
import {DarkIcon} from '../DarkMode/DarkIcon'
import {SunIcon} from '../DarkMode/SunIcon'
import { TodoContext } from '../TodoContext';
import React from 'react';

function PersonalInformation({total, completed}){
    const {
        darkMode,
        setDarkMode
    } = React.useContext(TodoContext)
    return(
        <header>
            <div className='header-display'>
                <div className="backgroundImg"></div>
                <div className="header--title-container">
                    <h2 className={`${darkMode ? 'header-dark' : 'header-ligth'}`}>Welcome! <span className="hand"></span></h2>
                    <h1 className={`${darkMode ? 'header-dark' : 'header-ligth'}`}> Piero Liberato </h1>
                </div>
                {/* <div className="header--information-container">
                    <a href="#"><span className="github"></span></a>
                    <a href="#"><span className="Linkeding"></span></a>
                </div> */}  
            </div>
            <div>
                    {!darkMode && 
                        (<DarkIcon 
                        onClick={()=>{
                            setDarkMode(state => !state)
                        }}
                        />)
                    }
                    {darkMode && 
                        (<SunIcon
                        onClick={()=>{
                            setDarkMode(state => !state)
                        }}
                        />)
                    
                    }
                </div>
        </header>
        
      
    );
  }
  
  
  export {PersonalInformation};
