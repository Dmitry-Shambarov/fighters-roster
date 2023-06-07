import { useEffect, useState } from 'react';
import { fetchFighters } from './api/fetchFighters';

interface Fighter {
  FighterId: number;
  FirstName: string;
  LastName: string;
  Nickname: string;
  WeightClass: string;
}

const Fighters = () => {
  const [fighters, setFighters] = useState<Fighter[]>([]);

  useEffect(() => {
    async function getFighters() {
      try {
        const fetchedFighters: Fighter[] = await fetchFighters();
        setFighters(fetchedFighters);

        const weightClasses = fetchedFighters
          .map((fighter) => fighter.WeightClass)
          .filter((weightClass, index, array) => array.indexOf(weightClass) === index);
        console.log('Weight Classes:', Array.from(weightClasses));
      } catch (error) {
        console.error('Error:', error);
      }
    }

    getFighters();
  }, []);

  return (
    <div>
      {fighters.map((fighter) => (
        <div key={fighter.FighterId}>
          <h3>
            {fighter.FirstName} {fighter.LastName}
          </h3>
          <h4>Nickname: {fighter.Nickname}</h4>
          <p>Weight Class: {fighter.WeightClass}</p>
        </div>
      ))}
    </div>
  );
};

export default Fighters;
