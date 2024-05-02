import React, {useEffect, useState} from 'react';
import {getAllObl} from "../../http/monitorApi";

const RfTable = () => {
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllObl();
        setFetchedData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
    if(fetchedData) {

        const {dates, counts} = fetchedData;
        const maxCount = Math.max(...counts);
        return (
            <div style={{maxHeight: "800px", overflowY: "auto"}}>
                <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black', backgroundColor: '#f2f2f2', padding: '8px' }}>Название области</th>
                            <th style={{ border: '1px solid black', backgroundColor: '#f2f2f2', padding: '8px' }}>Количество поступающих</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dates.map((date, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{date}</td>
                                <td style={{ border: '1px solid black', padding: '8px', position: 'relative', background: '#f0f0f0' }}>
                                    <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, backgroundColor: 'lightblue', width: `${(counts[index] / maxCount) * 100}%`, zIndex: 0 }}></div>
                                    <span style={{ position: 'relative', zIndex: 1 }}>{counts[index]}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default RfTable;