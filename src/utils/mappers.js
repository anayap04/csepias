export const getTagLabel = type => {
  const labels = {
    webinar: "Webinar Internacional",
  }

  return labels[type] || labels.webinar
}