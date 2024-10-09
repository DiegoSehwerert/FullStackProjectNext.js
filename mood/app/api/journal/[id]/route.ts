import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { data } from 'autoprefixer'
import { NextResponse } from 'next/server'

export const PATCH = async (req, { params }) => {
  const { content } = await req.json()
  const user = await getUserByClerkId()
  const updatedEntry = await prisma.journalEntry.update({
    where: {
      userId_id: {
        userId: user.id,
        id: params.id,
      },
    },
    data: {
      content,
    },
  })

  return NextResponse.json({ data: updatedEntry })
}
