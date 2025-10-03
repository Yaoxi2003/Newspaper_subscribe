import Form from './Form'
import Data from './Data'

function App() {

  const newLetter = Data.map(
    data => <Form key={data.id} {...data}/>
  )

  return (
    <>
      <main className='w-screen h-screen bg-gray-700 flex justify-center items-center'>
        {newLetter}
      </main>
    </>
  )
}

export default App
