import React from 'react'
import './Table.css'
function Table({ countries }) {
    return (
        
        <div>
            <table className="content-table">
                <tr><th>Country</th>
                    <th>Total Cases</th>
                    <th>Today Cases</th>
                    <th>Deaths</th>
                    <th>Today Deaths</th>
                    <th>Recovered</th>
                    <th>Today Recoverd</th>
                    <th>Critical Condition</th>
                    <th>Total Tests</th>
                    <th>Population</th>
                </tr>
            <tbody>
                {countries.map(({country, cases , todayCases, recovered, todayRecovered, deaths, todayDeaths, critical , tests , population }) => (
                    
                    <tr>
                        <td><strong>{country}</strong></td>
                        <td>
                            {cases}
                        </td>
                        <td>
                            {todayCases}
                        </td>
                        <td>
                            {deaths}
                        </td>
                        <td>
                            {todayDeaths}
                        </td>
                        <td>
                            {recovered}
                        </td>
                        <td>
                            {todayRecovered}
                        </td>
                        <td>
                            {critical}
                        </td>
                        <td>
                            {tests}
                        </td>
                        <td>
                            {population}
                        </td>
                    </tr>
                   
                
            ))}
             </tbody>
            </table>
        </div>
    )
}

export default Table
