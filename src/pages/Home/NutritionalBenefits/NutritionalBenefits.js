import React from 'react';
import healthyFood from '../../../assets/Healthy Food.jpg'

const NutritionalBenefits = () => {
    return (
  <div className="my-12">
    <div className="hero-content flex-col lg:flex-row">
        <img src={healthyFood} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
     <div>
        <h1 className="text-3xl font-bold">Nutritional Benefits of Fresh Food</h1>
        <p className="py-6 text-justify">Fresh fruits and vegetables are an important part of a healthy diet. They contain essential vitamins, minerals, fiber and other nutrients that are essential for good health. In fact, research has shown that a healthy diet rich in fruits and vegetables may reduce the risk of cancer and other chronic diseases. Fresh fruits and vegetables are an important part of a healthy diet. They contain essential vitamins, minerals, fiber and other nutrients that are essential for good health. In fact, research has shown that a healthy diet rich in fruits and vegetables may reduce the risk of cancer and other chronic diseases.</p>
    </div>
  </div>
</div>
    );
};

export default NutritionalBenefits;