import './main.css'
function App() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tg = (window as any).Telegram?.webApp
const onClose = () => {
  if (tg) {
    tg.close()
  }
}
  return (
    <div className="app-main">
      <div>
       Version 0.1
      </div>
      <h1>User - {tg && tg.initDataUnsafe.user?.username}</h1>
      <div className="card">
        <button onClick={onClose}>count is</button>
      </div>
    </div>
  )
}

export default App
