'use client'

import { useState } from 'react'
import { askQuestion } from '@/utils/api'

const Question = () => {
  const [value, setValue] = useState('')
  const [loading, setLoadin] = useState(false)
  const [response, setResponse] = useState(false)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoadin(true)
    const answer = await askQuestion(value)
    setResponse(answer)
    setValue('')
    setLoadin(false)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          disabled={loading}
          onChange={onChange}
          value={value}
          type="text"
          placeholder="Ask a question"
          className="rounded-lg border border-black/10 px-4 py-2 text-lg"
        />
        <button
          disabled={loading}
          type="submit"
          className="rounded-lg bg-blue-400 px-4 py-2 text-lg"
        >
          Ask
        </button>
      </form>
      {loading && <div>...loading</div>}
      {response && <div>{response}</div>}
    </div>
  )
}

export default Question
