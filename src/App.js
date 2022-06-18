import './App.css';

function App() {
  function startQuiz() {
      console.log('startQuiz')
  }
  return (
    <div className="app">
        <div className='app-container'>
            <div className='app-title'>
                Quizzical
            </div>
            <div className='app-description'>
                Description
            </div>
            <button className='app-startquiz' onClick={startQuiz}>
                Start quiz
            </button>
        </div>
    </div>
  );
}

export default App;
