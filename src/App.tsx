import React, {useState} from 'react';
import Circle from './Circle';

let startNumbers: number[] = [];
for (let i: number = 5; i <= 36; i++) {
    startNumbers.push(i);
}
const App = () => {
    const random = (min: number, max: number): number => Math.floor(Math.random() * (max - min) + min);

    const [numbers, setNumbers] = useState<number[]>([]);

    const clickButton = (): void => {
        if (startNumbers.length > 0) {
            const newNumbers: number[] = [];
            for (let i: number = 1; i <= 5; i++) {
                const randomIndex: number = random(0, startNumbers.length);
                newNumbers.push(startNumbers[randomIndex]);
                startNumbers.splice(randomIndex, 1);
            }
            // newNumbers.sort((a, b) => a - b);

            for (let i: number = 0; i < newNumbers.length; i++) {
                for (let j: number = 0; j < newNumbers.length; j++) {
                    if (newNumbers[j] > newNumbers[j + 1]) {
                        const min: number = newNumbers[j + 1]
                        newNumbers[j + 1] = newNumbers[j];
                        newNumbers[j] = min;
                    }
                }
            }
            setNumbers(newNumbers);
        } else {
            alert('Номера закончились!');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center gap-3 h-3/4">
                <button onClick={clickButton} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    New numbers
                </button>
                <div className="font-bold flex justify-center gap-2">
                    {
                        numbers.map((number: number) => {
                            if (number)
                                return (
                                  <Circle key={number} num={number}/>
                                )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default App;