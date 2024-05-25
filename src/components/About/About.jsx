import React from 'react'

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        What I <span className="text-neutral-500">Do</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className='rounded-3xl' src="src\assets\rithikrajaprofilepic.jpg" alt="About" />
          </div>
          <div className="w-ful lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
                <p className=''>{ABOUT_TEXT}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
