import React = require("react");
import {useEffect, useState} from "react";
import {weekDays} from "../../util/dates";
import CalendarHeaderField from "../fields/CalendarHeaderField";

interface CalendarHeaderProps {}

function CalendarHeader(props: CalendarHeaderProps) {

    const [fields, setFields] = useState<JSX.Element[]>([])

    useEffect(() => {
        setFields(weekDays.map(day => <CalendarHeaderField content={day} />))
    }, [])

    return (
        <div className={"flex flex-row"}>
            {fields}
        </div>
    )
}

export default CalendarHeader