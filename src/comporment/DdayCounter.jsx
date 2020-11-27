import {useState, useEffect} from 'react';
import moment from "moment";
export default function DdayCounter(props) {
  const { endDate } = props;

  const getDuration = () =>
      moment.duration(moment(endDate, "YYYYMMDD").diff(moment()));

  const [duration, setDuration] = useState(getDuration());

  useEffect(() => {
      const interval = setInterval(() => {
          setDuration(getDuration());
      }, 1000);

      return () => {
          clearInterval(interval);
      }
  });

  return (
    <div>
      <span>{duration.days()}</span>
      <span>일</span>
      <span>{duration.hours()}</span>
      <span>시간</span>
      <span>{duration.minutes()}</span>
      <span>분</span>
      <span>{duration.seconds()}</span>
      <span>초</span>
    </div>
  );
}
