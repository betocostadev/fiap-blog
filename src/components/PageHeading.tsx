export default function PageHeading({
  title,
  message,
}: {
  title: string
  message: string
}) {
  return (
    <div className="bg-gray-100 text-gray-700 text-center p-4 w-full dark:bg-gray-700 dark:text-white">
      <h2 className="text-xl">{title}</h2>
      <p>{message}</p>
    </div>
  )
}
