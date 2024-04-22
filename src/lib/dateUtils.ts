export function getPostDate(date: string): string {
  const newDate = new Date(date).toLocaleDateString('pt-BR')
  const today = new Date().toLocaleDateString('pt-BR')
  const yesterday = new Date(
    new Date().setDate(new Date().getDate() - 1)
  ).toLocaleDateString('pt-BR')

  return newDate === today
    ? 'Today'
    : newDate === yesterday
    ? 'Yesterday'
    : newDate
}
