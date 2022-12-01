import React = require("react");
import {useEffect, useState} from "react";
import {buildFields} from "../../util/dates";

interface CalendarBodyProps {
    month: number,
    year: number,
    onClick: (date: Date) => void,
    highlighted: Date[]
}

function CalendarBody(props: CalendarBodyProps) {

    const [fields, setFields] = useState<JSX.Element[][]>([])

    useEffect(() => {
        setFields(buildFields(props.month, props.year, props.onClick, props.highlighted))
    }, [props.month, props.year, props.highlighted])

    return (
        <>
            {fields.map(row => (
                <div className={"flex flex-row"}>
                    {row}
                </div>
            ))}
        </>
    )
}

export default CalendarBody