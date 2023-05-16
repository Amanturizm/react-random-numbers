import React from 'react';

type Circle = {num: number};
const Circle = (props: Circle) => (
    <div className="w-14 h-14 text-lg flex justify-center items-center border border-solid border-black rounded-full">
        {props.num}
    </div>
)

export default Circle;