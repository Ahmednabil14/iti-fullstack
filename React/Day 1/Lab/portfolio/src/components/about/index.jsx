import './index.css'

export default function About() {
    return (
        <div className="row about mt-5 ms-5">
            <div className="col-4">
                <p className='display-6'>
                    About me
                </p>
            </div>

            <div className='col-8'>
                <p className='w-75'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button type="button" class="btn btn-dark border-1 border-light px-5 py-2">DOWNLOAD RESUME</button>
            </div>
        </div>
    )
}