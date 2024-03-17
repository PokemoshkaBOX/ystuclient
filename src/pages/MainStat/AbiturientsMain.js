import React, {useEffect, useState} from 'react';
import {getStudents} from "../../http/monitorApi";

const AbiturientsMain = () => {
    const [fetchedData, setFetchedData] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStudents();
        console.log(data)
        setFetchedData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
    return (
        <div className="colSt" >
            <h3 className="textSt" style={{marginTop: 10}}>Всего абитуриентов: {fetchedData}</h3>
        </div>
    );
};

export default AbiturientsMain;