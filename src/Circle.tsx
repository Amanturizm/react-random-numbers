import React from 'react';

interface ICircle {
    num: number;
}
const Circle: React.FC<ICircle> = props => (
    <div className="w-14 h-14 text-lg flex justify-center items-center border border-solid border-black rounded-full">
        {props.num}
    </div>
)

export default Circle;