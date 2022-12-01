import React = require("react");

interface CalendarHeaderFieldProps {
    content: string
}

function CalendarHeaderField(props: CalendarHeaderFieldProps) {

    return (
        <span className={"flex justify-center flex-1 bg-neutral-800 text-white p-2 md:p-5 shadow m-1"}>
            <span className={"hidden md:inline"}>{props.content}</span>
            <span className={"inline md:hidden"}>{props.content?.at(0)}</span>
        </span>
    )
}

export default CalendarHeaderField