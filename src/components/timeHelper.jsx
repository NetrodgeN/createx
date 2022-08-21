export const timeMonth = (time) => {
  let month = time.substr(5, 2);
  if (month === '01') {
    return 'January';
  } else if (month === '02') {
    return 'February';
  } else if (month === '03') {
    return 'March';
  } else if (month === '04') {
    return 'April';
  } else if (month === '05') {
    return 'May';
  } else if (month === '06') {
    return 'Jun';
  } else if (month === '07') {
    return 'July';
  } else if (month === '08') {
    return 'August';
  } else if (month === '09') {
    return 'September';
  } else if (month === '10') {
    return 'October';
  } else if (month === '11') {
    return 'November';
  } else if (month === '12') {
    return 'December';
  }
};

export const timeDate = (time) => {
  let day = time.substr(8, 2);
  return day;
};

export const timeDurationUTC = (event) => {
  let start = event.date.substr(11, 8);
  let end = new Date(+new Date(event.date) + event.duration);
  let hh = end.getUTCHours();
  let min = end.getUTCMinutes();
  let sec = end.toString().substr(22, 2);

  return `${start} - ${hh}:${min}:${sec}`;
};

