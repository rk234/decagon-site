import { JetBrains_Mono } from 'next/font/google'

const jbm = JetBrains_Mono({ subsets: ["latin"], style: ["normal"] })

export default function Schedule() {
    return <div className='flex flex-col xl:flex-row bg-slate-950 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
        <div className='grow border-b-sky-300 border-b-2'>
            <p className={`${jbm.className} text-slate-300 text-sm`}> -&gt; 03.</p>
            <h1 className={`${jbm.className} text-sky-300 text-5xl`}>Schedule</h1>
        </div>
        <div className='w-full xl:w-2/3 flex flex-col gap-1'>
            <table className='table-auto border-2 border-collapse border-slate-800'>
                <thead className={`${jbm.className}`}>
                    <tr>
                        <th>Time</th>
                        <th>Event</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>8:10 AM - 8:40 AM</td>
                        <td>Check-in</td>
                        <td>Front Doors</td>
                    </tr>
                    <tr>
                        <td>8:40 AM - 8:55 AM</td>
                        <td>Opening Cerimony</td>
                        <td>Cafeteria</td>
                    </tr>
                    <tr>
                        <td>9:05 AM - 10:05 AM</td>
                        <td>Individual Round 1</td>
                        <td>Rooms 201-205</td>
                    </tr>
                    <tr>
                        <td>10:15 AM - 11:15 AM</td>
                        <td>Individual Round 2</td>
                        <td>Rooms 201-205</td>
                    </tr>
                    <tr>
                        <td>11:25 AM - 11:55 AM</td>
                        <td>Team Round</td>
                        <td>Rooms 201-205</td>
                    </tr>
                    <tr>
                        <td>12:00 PM - 1:00 PM</td>
                        <td>Lunch + Estimathon Rules Explanation</td>
                        <td>Cafeteria</td>
                    </tr>
                    <tr>
                        <td>1:00 PM - 1:30 PM</td>
                        <td>Theme (Estimathon) Round</td>
                        <td>Cafeteria</td>
                    </tr>
                    <tr>
                        <td>1:40 PM - 2:20 PM</td>
                        <td>Countdown Round</td>
                        <td>Cafeteria</td>
                    </tr>
                    <tr>
                        <td>2:20 PM - 2:30 PM</td>
                        <td>Awards</td>
                        <td>Cafeteria</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}