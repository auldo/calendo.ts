import React = require("react");

interface CalendarFieldProps {
    date: Date,
    onClick: (date: Date) => void,
    highlighted: boolean
}

function CalendarField(props: CalendarFieldProps) {

    return (
        <div
            onClick={() => props.onClick(props.date)}
            className={"overflow-scroll flex items-center flex-1 p-2 md:p-5 shadow m-1 hover:bg-blue-500 hover:text-white cursor-pointer flex-col " + (props.highlighted ? "text-white bg-blue-500" : "bg-neutral-100")}>
            <span>{props.date?.getDate()}</span>
        </div>
    )
}

export default CalendarField