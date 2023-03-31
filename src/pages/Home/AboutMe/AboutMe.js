import React from 'react';
import aboutMe from '../../../assets/aboutme.jpg'

const AboutMe = () => {
    return (
        <div>
            <div className="mb-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={aboutMe} className="max-w-sm rounded-lg shadow-2xl"  alt=''/>
                    <div>
                        <h1 className="text-3xl font-bold">About My Story</h1>
                        <p className="py-6 text-justify">Chemicals are essential building blocks for everything in the world. All living matter, including people, animals and plants, consists of chemicals. All food is made up of chemical substances. Chemicals in food are largely harmless and often desirable – for example, nutrients such as carbohydrates, protein, fat and fibre are composed of chemical compounds. Many of these occur naturally and contribute both to a rounded diet and to our eating experience.</p>
                        <p className='text-justify'>
                        On the other hand, Fresh fruits and vegetables are an important part of a healthy diet. They contain essential vitamins, minerals, fiber and other nutrients that are essential for good health. In fact, research has shown that a healthy diet rich in fruits and vegetables may reduce the risk of cancer and other chronic diseases. That's why I start my fresh food journey
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;