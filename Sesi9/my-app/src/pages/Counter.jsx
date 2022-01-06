import { useEffect, useState } from 'react';

function Counter () {
  const [ counter, setCounter ] = useState(0)

  // useEffect(() => {
  //   window.addEventListener('blur', () => {
  //     console.log('Effect berjalan')
  //   })

  //   return () => {
  //     window.removeEventListener('blur', )
  //   }
  // })

  useEffect(
    // componentDidMount()
    () => {
      console.log('Component Counter berhasil dibuat')
    },
    // shouldComponentUpdate() -> false (jika [])
    []
  )

  useEffect(
    // componentDidMount()
    // componentDidUpdate()
    () => {
      console.log('State counter berubah')

      // componentWillUnmount()
      return () => {}
    },
    // shouldComponentUpdate()
    [ counter ]
  )

  return (
    <div>
      <h2>Let's count!</h2>
      <h3>{ counter }</h3>

      {/* BONUS: in-line styling */}
      <button
        onClick={() => setCounter(counter + 1)}
        style={{ fontSize: '2em' }}
      >
        Hit me!
      </button>
    </div>
  )
}

export default Counter
