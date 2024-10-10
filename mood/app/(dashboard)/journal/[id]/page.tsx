import { prisma } from '@/utils/db'
import { getUserByClerkId } from '@/utils/auth'
import Editor from '@/components/Editor'

const getEntry = async (id: string) => {
  const user = await getUserByClerkId()
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id: id,
      },
    },
    include: {
      analysis: true,
    },
  })

  return entry
}

const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id)

  return (
    <div className="h-full w-full">
      <div className="col-span-2">
        <Editor entry={entry} />
      </div>
    </div>
  )
}

export default EntryPage
