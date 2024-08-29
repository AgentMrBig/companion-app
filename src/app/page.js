import React from 'react'
import Chat from './components/Chat'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to the AI Companion App</h1>
      <Chat />
    </main>
  )
}