import './index.css'
import React, { useState } from 'react';

export default function Skills () {
    const [percent, setPercent] = useState({HTML: 90, CSS: 80, JavaScript: 70, Python:85})
    return (
        <div className="skills container-fluid p-0 d-flex flex-column align-items-center mt-5">
            <h1 className='text-light pt-4 display-3'>
                Skills
            </h1>
            <p className='text-light w-75 mt-5 mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className='skills-content container-fluid d-flex justify-content-center gap-5'>
                <div className='skills-left text-light w-25 d-flex flex-column align-items-center'>
                    <h1>
                        MY FOCUS
                    </h1>
                    <hr className='border border-2 border-light w-100'/>
                    <p>
                        UI/UX Design
                    </p>
                    <p>
                        Front-end Development
                    </p>
                    <p>
                        Back-end Development
                    </p>
                </div>
                <div className='skills-right'>
                    <div className='d-flex'>
                        <p className='bg-dark'>
                            HTML
                        </p>
                        <div className='percentage' style={{backgroundImage: `linear-gradient(to right, grey ${percent.HTML}%, white ${100 - percent.HTML}%)`}}>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <p className='bg-dark'>
                            CSS
                        </p>
                        <div className='percentage' style={{backgroundImage: `linear-gradient(to right, grey ${percent.CSS}%, white ${100 - percent.CSS}%)`}}>

                        </div>
                    </div>
                    <div className='d-flex'>
                        <p className='bg-dark'>
                            JavaScript
                        </p>
                        <div className='percentage' style={{backgroundImage: `linear-gradient(to right, grey ${percent.JavaScript}%, white ${100 - percent.JavaScript}%)`}}>

                        </div>
                    </div>
                    <div className='d-flex'>
                        <p className='bg-dark'>
                            Python
                        </p>
                        <div className='percentage' style={{backgroundImage: `linear-gradient(to right, grey ${percent.Python}%, white ${100 - percent.Python}%)`}}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}