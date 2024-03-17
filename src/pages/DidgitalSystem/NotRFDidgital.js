import React, {useEffect, useState} from 'react';
import {getNotRF} from "../../http/DIdgitalSystemApi";

const NotRFDidgital = ({Inst}) => {
    const [fetchedData, setFetchedData] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNotRF(Inst);
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
            <h3 className="textSt" style={{marginTop: 10}}>Иностранные: {fetchedData}</h3>
        </div>
    );
};

export default NotRFDidgital;