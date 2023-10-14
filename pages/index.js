import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Chart } from 'chart.js'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main>
         <div>
      <h1 className="text-2xl font-bold">Chart Example</h1>
      <Chart/>
    </div>
    </main>
  )
}
