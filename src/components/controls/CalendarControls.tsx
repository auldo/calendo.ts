import React = require("react");

interface CalendarControlsProps {
    increase: () => void,
    decrease: () => void,
    month: number,
    year: number
}

const increaseIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5}
         stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
    </svg>
)

const decreaseIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
)

function CalendarControls(props: CalendarControlsProps) {

    return (
        <div className={"flex flex-1 justify-center my-10"}>
            <div className={"flex text-xl font-thin space-x-10"}>
                <span onClick={props.decrease} className={"cursor-pointer text-blue-500"}>{decreaseIcon}</span>
                <span>{String(props.month + 1).length === 1 ? "0" + String(props.month + 1) : String(props.month + 1)}.{props.year}</span>
                <span onClick={props.increase} className={"cursor-pointer text-blue-500"}>{increaseIcon}</span>
            </div>
        </div>
    )
}

export default CalendarControls