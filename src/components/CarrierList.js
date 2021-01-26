import React, { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import Typography from '@material-ui/core/Typography';
import { coverageState, usState, carrierState } from '../atoms';

export default function CarrierList() {
  const coverage = useRecoilValue(coverageState);
  const usaState = useRecoilValue(usState);
  const [carriers, setCarriers] = useRecoilState(carrierState);
  // NOTE : would typically set this as an env var
  const ROOT_URL = 'https://pavc3nv6b0.execute-api.us-east-2.amazonaws.com';

  useEffect(() => {
    const getCarriers = async () => {
      const url = `${ROOT_URL}/dev/get-carriers?type=${coverage}&state=${usaState}`;
      const resp = await fetch(url);
      const body = await resp.json();
      setCarriers(body.data);
    };

    if (coverage && usaState) {
      getCarriers();
    }
  }, [coverage, usaState]);

  if (!coverage || !usaState) {
    return (
      <>
        <h2>Carrier List</h2>
        <Typography>
          {`Please enter 
            ${(!coverage && 'coverage type') || ''}
            ${(!coverage && !usaState && 'and') || ''}  
            ${!usaState && 'US state'}
          `}
        </Typography>
      </>
    );
  }

  const CarriersAvailable = () =>
    carriers.length ? (
      <ul>
        {carriers.map((carrier, index) => (
          <li key={index}>{carrier}</li>
        ))}
      </ul>
    ) : (
      <span>There are no carriers available in your area</span>
    );

  return (
    <div>
      <h2>Carrier List</h2>
      <CarriersAvailable />
    </div>
  );
}
