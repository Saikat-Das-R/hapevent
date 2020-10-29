/**
 * Created by Saikat on 22-Oct-20.
 */
/**
 * Created by Saikat on 22-Oct-20.
 */
import React from 'react';
import "./../../../../node_modules/react-day-picker/lib/style.css";
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse'
import DayPickerInput from "./../../../../node_modules/react-day-picker/DayPickerInput";

function formatDate(date, format, locale) {
    return dateFnsFormat(date, format, { locale });
}


const EventByDate =({placeholder,handlechange})=>(
    <div>
        <i class="fa fa-calendar" aria-hidden="true" onClick={true}></i>
        {<DayPickerInput  formatDate={formatDate}  placeholder={placeholder}  format={"dd/MM/yyyy"} />}
    </div>

    )

export default EventByDate;