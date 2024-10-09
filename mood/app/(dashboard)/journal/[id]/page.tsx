import { prisma } from '@/utils/db'
import { getUserByClerkId } from '@/utils/auth'
import Editor from '@/components/Editor'

const getEntry = async (id) => {
  const user = await getUserByClerkId()
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id: id,
      },
    },
  })

  return entry
}

const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id)
  const analysisData = [
    { name: 'Subject', value: '' },
    { name: 'Summary', value: '' },
    { name: 'Mood', value: '' },
    { name: 'Negative', value: false },
  ]
  return (
    <div className="grid h-full w-full grid-cols-3">
      <div className="col-span-2">
        <Editor entry={entry} />
      </div>
      <div className="border-l border-black/10">
        <div className="bg-blue-300 px-6 py-10">
          <h2 className="text-2xl">Analysis</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between border-b border-t border-black/10 px-2 py-4"
              >
                <span className="text-lg font-semibold">{item.name}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EntryPage
