export function getPostDateCard(date: string): string {
  const newDate = new Date(date).toLocaleDateString('pt-BR')
  const today = new Date().toLocaleDateString('pt-BR')
  const yesterday = new Date(
    new Date().setDate(new Date().getDate() - 1)
  ).toLocaleDateString('pt-BR')
  const thisWeek = new Date(
    new Date().setDate(new Date().getDate() - 7)
  ).toLocaleDateString('pt-BR')

  return newDate === today
    ? 'Today'
    : newDate === yesterday
    ? 'Yesterday'
    : newDate === thisWeek
    ? 'This week'
    : newDate
}

export function getPostDate(date: string): string {
  const stringDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return `Posted on ${stringDate}`
}
