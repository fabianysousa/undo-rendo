import styles from './App.module.css';
import './global.css';

function App() {
  return (
    <div className={styles.app} onClick={createCircle}>
      <div>
        <button className={styles.buttonUndo}>Undo</button>
      </div>
      <div>
        <button className={styles.buttonRendo}>Rendo</button>
      </div>
    </div>
  )
}

export default App
