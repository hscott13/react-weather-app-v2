function FormatDate(props) {
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }
  let day = props.date.getDate();
  let month = props.date.getMonth() + 1;
  let year = props.date.getFullYear();
  return `${hours}:${minutes} ${day}/${month}/${year}`;
}
export default FormatDate;
