function App() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tg = (window as any).Telegram?.webApp

  return (
    <>
      <div>
       Version 0.1
      </div>
      <h1>User - {tg && tg.initDataUnsafe.user?.username}</h1>
      <div className="card">
        <button>count is</button>
      </div>
    </>
  )
}

export default App
