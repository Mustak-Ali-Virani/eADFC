import React, { Component } from 'react';
import video from '../assets/eDCFC_Tutorial.mp4';


const Tutorial = () => {
    return (
        <div className='flex justify-center'>
                <div>
                    <ol>
                        <li>1. Insert Login Credentials from the designated device.</li>
                        <li>2. Check all the boxes listed in the Checklist page that applies.</li>
                        <li>3. Submit your Response and wait for the approval from the Checker's end.</li>
                    </ol>
                    <div style={{ marginTop: '20px' }}></div>
                    <video src={video} width="750" height="500" controls>
                    </video>
                </div>
        </div>
    );
}

export default Tutorial;
