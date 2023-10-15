import Image from 'next/image'
import { Inter } from 'next/font/google'
import Chart from '@/components/Chart';
import { useState } from 'react';
import { SomeData } from '@/Data/ChartData';
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const [getData, setData] = useState({
    labels: SomeData.map((data) => data.year),
    datasets: [
      {
        label: "Age",
        data: SomeData.map((data) => data.Age),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <main>
         <div className='flex flex-col items-center h-screen space-y-3 justify-center'>
      <h1 className="text-2xl font-bold ">Age</h1>
      <div className='m-2' style={{ width: 500 }}>
        <Chart chartData={getData} />
      </div>
    </div>
    </main>
  )
}
