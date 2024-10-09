'use client'

import { updateEntry } from '@/utils/api'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'

const Editor = ({ entry }) => {
  const [value, setValue] = useState(entry.content)
  const [isLoading, setIsLoading] = useState(false)
  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true)
      const updated = await updateEntry(entry.id, _value)
      setIsLoading(false)
    },
  })

  return (
    <div className="h-full w-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <div className="text-3xl">...loading</div>
        </div>
      )}
      <textarea
        className="h-[calc(100vh-66px)] w-full resize-none p-8 text-xl outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </div>
  )
}

export default Editor
