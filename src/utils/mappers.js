export const getTagLabel = type => {
  const labels = {
    webinar: "Webinar Internacional",
    course: "Curso/Capacitación",
  }

  return labels[type] || labels.webinar
}

export const mapTimes = obj => {
  const arrValues = obj.map(x => `${x.city} – ${x.time}`)
  return arrValues.toString().replace(',', ' ');
}

export const CapitalizeFirstWord = str => str.charAt(0).toUpperCase() + str.slice(1);