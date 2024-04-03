
import './App.css'
import { LineChart, Line, XAxis, YAxis } from 'recharts';

function App() {

  const myData = [
    {
      "ID": 1001,
      Mathematics: 85,
      Physics: 78,
      Subject: "Mathematics"
    },
    {
      "ID": 1002,
      Mathematics: 89,
      Physics: 88,
      Subject: "Physics"
    },
    {
      "ID": 1003,
      Physics: 70,
      Mathematics: 75,
      Chemistry: 92,
      Subject: "Chemistry"
    },
    {
      "ID": 1004, Physics: 98,
      Mathematics: 65,
      Biology: 65,
      Subject: "Biology"
    },
    {
      "ID": 1005,
      Physics: 74,
      Mathematics: 95,
      ComputerScience: 80,
      Subject: "Computer Science"
    }
  ]


  return (
    <>
      <h1 className='text-2xl text-lime-500 text-center'>Vite + React</h1>
      <div className="stats shadow">

        <div className="stat">
          <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>

      </div>
     
     <LineChart width={600} height={500} data={myData}>
        <Line type="monotone" dataKey={"Mathematics"} stroke="black"></Line>
        <Line type="monotone" dataKey={"Physics"} stroke="green"></Line>
        <XAxis dataKey={"ID"}></XAxis>
        <YAxis dataKey={"Physics"}></YAxis>
     </LineChart>

    </>
  )
}

export default App
