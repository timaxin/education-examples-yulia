import './styles/App.css'
import Counter from './components/counter.jsx'

function App() {
  return (
    <div className="app-container">
      <Counter min={0} max={100} />
    </div>
  )
}

export default App
