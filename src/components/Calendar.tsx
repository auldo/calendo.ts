import React = require("react");
import {useState} from "react";
import CalendarHeader from "./core/CalendarHeader";
import CalendarBody from "./core/CalendarBody";
import CalendarControls from "./controls/CalendarControls";
import {datesAreEqual} from "../util/dates";

export enum CalendarMode {
    VIEW, PICK_DATE, PICK_DATE_RANGE
}

interface CalendarProps {
    mode: CalendarMode,
    onClick?: (date: Date) => void,
    onDone?: (selection: Date | Date[]) => void
}

function Calendar(props: CalendarProps) {

    const [year, setYear] = useState<number>(new Date().getFullYear())
    const [month, setMonth] = useState<number>(new Date().getMonth())

    const [highlighted, setHighlighted] = useState<Date[]>([])

    function increase() {
        if (month === 11) {
            setMonth(0)
            setYear(year + 1)
        } else {
            setMonth(month + 1)
        }
    }

    function decrease() {
        if (month === 0) {
            setMonth(11)
            setYear(year - 1)
        } else {
            setMonth(month - 1)
        }
    }

    function onDatePicked(date: Date) {
        if(props.onClick)
            props.onClick(date)
        if(props.mode === CalendarMode.PICK_DATE_RANGE)
            onDatePickedForDateRange(date)
        else if(props.mode === CalendarMode.PICK_DATE)
            setHighlighted([date])
    }

    function onDatePickedForDateRange(date: Date) {
        if(highlighted.length === 0)
            setHighlighted([...highlighted, date])
        else if(highlighted.length === 1) {
            const earlier: Date = highlighted[0] <= date ? highlighted[0] : date
            const latter: Date = datesAreEqual(date, earlier) ? highlighted[0] : date
            const datesInBetween: Date[] = [new Date(earlier)]
            while(!datesAreEqual(earlier, latter)){
                earlier.setDate(earlier.getDate() + 1)
                datesInBetween.push(new Date(earlier))
            }
            setHighlighted([...datesInBetween])
        } else
            setHighlighted([date])
    }

    return (
        <div className={"flex flex-col"}>
            <CalendarControls increase={increase} decrease={decrease} month={month} year={year} />
            <CalendarHeader />
            <CalendarBody highlighted={highlighted} onClick={onDatePicked} month={month} year={year} />
            {props.mode !== CalendarMode.VIEW ? (
                <div
                    onClick={() => {
                        if(props.onDone)
                            props.onDone(props.mode === CalendarMode.PICK_DATE ? highlighted[0] : highlighted)
                    }}
                    className={"flex"}>
                    <button className={"mt-10 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 shadow"}>Done</button>
                </div>
            ) : <></>}
        </div>
    )
}

export default Calendar