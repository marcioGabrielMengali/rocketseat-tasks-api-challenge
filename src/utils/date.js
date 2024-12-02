export const getCurrentDate = () => {
    const currentDate = new Date()
    const formatter = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    const formattedDate = formatter.format(currentDate)
    return formattedDate
}