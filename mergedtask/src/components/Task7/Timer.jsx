import React,{useState,useEffect} from "react";
import "./Task7.css";

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    useEffect(() => {
        let interval;
        if (isRunning && !isPaused) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, isPaused]);

    useEffect(() => {
        if (seconds === 60) {
            setSeconds(0);
            setMinutes((prevMinutes) => prevMinutes + 1);
        }
        if (minutes === 60) {
            setMinutes(0);
            setHours((prevHours) => prevHours + 1);
        }
        if (hours === 24) {
            setHours(0);
        }
        }, [seconds, minutes, hours]);

    const handleStart = () => {
        setIsRunning(true);
        setIsPaused(false);
    };

    const handleStop = () => {
        setIsRunning(false);
        setIsPaused(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setIsPaused(false);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    };

    const handlePause = () => {
        setIsPaused(true);
    };

    const handleResume = () => {
        setIsPaused(false);
    };

    return (
        <div className="timer-container">
            <h2>Timer</h2>
            <p>Elapsed Time: {hours}:{minutes}:{seconds}</p>
            <div className="timer-buttons">
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleResume}>Resume</button>
            </div>
        </div>
    );
}

export default Timer;

//     })
//     const [isRunning, setIsRunning] = useState(false);
//     useEffect(() => {
//         let timer;
//         if (isRunning){
//             timer=setInterval(() => {
//                 setSeconds((prevSeconds) => prevSeconds + 1);
//                 }, 1000);
//             } else {
//                 clearInterval(timer);
//             }
//         return () => clearInterval(timer);
//     }, [isRunning]);

//     const handleStart =()=>setIsRunning(true);
//     const handleStop =()=>setIsRunning(false);
//     const handleReset =()=>{
//         setIsRunning(false);
//         setSeconds(0);
//     }

//     return (
//         <div className="timer-container">
//             <h2>Timer</h2>
//             <p>Elapsed Time: {seconds}</p>
//             <div className="timer-buttons">
//                 <button onClick={handleStart}>Start</button>
//                 <button onClick={handleStop}>Stop</button>
//                 <button onClick={handleReset}>Reset</button>
//             </div>
//         </div>
//     );
//     }
// export default Timer;
