export default function PageHeading({
  title,
  message,
}: {
  title: string
  message: string
}) {
  return (
    <div className="bg-gray-100 text-gray-700 text-center p-2 w-full dark:bg-gray-700 dark:text-white mb-4">
      <h2 className="text-lg md:text-2xl">{title}</h2>
      <p className="font-thin">{message}</p>
    </div>
  )
}
