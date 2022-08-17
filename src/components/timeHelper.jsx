export const timeMonth = (time) =>{
  let month = time.substr(5,2)
  if (month === '01'){
    return 'January'
  } else if( month === '02'){
    return "February"
  } else if( month === '03'){
    return "March"
  }else if( month === '04'){
    return "April"
  }else if( month === '05'){
    return "May"
  }else if( month === '06'){
    return "Jun"
  }else if( month === '07'){
    return "July"
  }else if( month === '08'){
    return "August"
  }else if( month === '09'){
    return "September"
  }else if( month === '10'){
    return "October"
  }else if( month === '11'){
    return "November"
  }else if( month === '12'){
    return "December"
  }
}

export const timeDate = (time) =>{
  let date = time.substr(8,2)
  return date
}

export default function timeConversion(millisec) {
  const seconds = Number((millisec / 1000).toFixed(1));

  const minutes = Number((millisec / (1000 * 60)).toFixed(1));

  const hours = Number((millisec / (1000 * 60 * 60)).toFixed(1));

  const days = Number((millisec / (1000 * 60 * 60 * 24)).toFixed(1));

  if (seconds < 60) {
    return `${seconds} Sec`;
  } else if (minutes < 60) {
    return `${minutes} Min`;
  } else if (hours < 24) {
    return `${hours} Hrs`;
  } else {
    return `${days} Days`;
  }
};
