import './index.css';
import React from 'react';

const skillsArray = [
    { name: 'HTML', percent: 90 },
    { name: 'CSS', percent: 80 },
    { name: 'JavaScript', percent: 70 },
    { name: 'Python', percent: 85 }
];

const SkillProgressBar = ({ name, percent }) => {
    return (
        <div className='d-flex'>
            <p className='bg-dark'>
                {name}
            </p>
            <div className='percentage' style={{backgroundImage: `linear-gradient(to right, grey ${percent}%, white ${100 - percent}%)`}}>
            </div>
        </div>
    );
};

export default function Skills() {
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
                    {skillsArray.map((skill) => (
                        <SkillProgressBar name={skill.name} percent={skill.percent} />
                    ))}
                </div>
            </div>
        </div>
    );
}