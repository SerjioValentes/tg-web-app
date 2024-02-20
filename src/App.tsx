import Header from './components/header'
import './main.css'
function App() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tg = (window as any).Telegram?.WebApp
  const onClose = () => {
    if (tg) {
      tg.close()
    }
  }
  return (
    <div className="app-main-wrapper">

      <div>
        <button onClick={onClose}>Close</button>
        <div>Version 0.4</div>
        <h1>User - {tg && tg.initDataUnsafe?.user}</h1>
        <h1>version - {tg && tg.version}</h1>
      </div>
      
      <div className='app-main-header'>
        <Header />
      </div>
    </div>
  )
}

export default App
