import Image from 'next/image'
import styles from './page.module.css'
import Counter from './components/Counter'

export default function Home() {
  return (
    <>
    <h1>홈페이지</h1>
    <Counter />
    </>
  )
}
