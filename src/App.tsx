import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@/App.css'

interface ReferenceConfig {
  id: string
  label: string
  link: string
}

const referenceConfig: ReferenceConfig[] = [
  {
    id: 'vite',
    label: 'Vite',
    link: 'https://vitejs.dev/',
  },
  {
    id: 'react',
    label: 'React',
    link: 'https://react.dev/',
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
  },
  {
    id: 'eslint',
    label: 'ESLint',
    link: 'https://eslint.org/',
  },
  {
    id: 'prettier',
    label: 'Prettier',
    link: 'https://prettier.io/',
  },
  {
    id: 'vitest',
    label: 'Vitest',
    link: 'https://vitest.dev/',
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='logo-block'>
        <a
          href='https://vitejs.dev'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={viteLogo}
            className='logo'
            alt='Vite logo'
          />
        </a>
        <div>X</div>
        <a
          href='https://react.dev'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={reactLogo}
            className='logo react'
            alt='React logo'
          />
        </a>
      </div>
      <h1>Vite + React + TypeScript + ESLint + Prettier + Vitest</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className='reference-block'>
        {referenceConfig.map((item: ReferenceConfig) => (
          <a
            key={item.id}
            href={item.link}
            target='_blank'
            rel='noreferrer'
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  )
}

export default App
