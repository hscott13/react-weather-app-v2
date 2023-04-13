function DateFormat(props) {
  let hours = props.date.getHours();
  let minutes =
    (props.date.getMinutes() < 10 ? "0" : "") + props.date.getMinutes();

  let day = props.date.getDate();
  let month = props.date.getMonth() + 1;
  let year = props.date.getFullYear();
  return `${hours}:${minutes} ${day}/${month}/${year}`;
}
export default DateFormat;
