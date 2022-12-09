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