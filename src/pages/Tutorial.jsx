import React from 'react';

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
                    <video width="100%" height="100%" controls>
                        <source src="./components/eDCFC_Tutorial.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
        </div>
    );
}

export default Tutorial;
