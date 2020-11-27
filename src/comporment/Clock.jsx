import {useState, useEffect} from 'react';

import moment from "moment";

export default function Clock(props){
    const [now, setNow] = useState(moment());

    useEffect(() => {
        const interval = setInterval(() => setNow(moment()), 1000);

        return () => {
            clearIntercal(interval);
        }
    }, []);

    return (
        <div>
            <span>{now.format().gormat('DD')}</span>
            <span>일</span>

            <span>{now.format().gormat('HH')}</span>
            <span>시간</span>

            <span>{now.format().gormat('mm')}</span>
            <span>분</span>

            <span>{now.format().gormat('ss')}</span>
            <span>초</span>
        </div>
    )
}
