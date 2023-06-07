import { useEffect, useState } from 'react';
import { fetchFighters } from './api/fetchFighters';
import styles from '../styles/fighters.module.scss';

interface Fighter {
  FighterId: number;
  FirstName: string;
  LastName: string;
  Weight: number;
}

const Fighters = () => {
  const [fighters, setFighters] = useState<Fighter[]>([]);

  useEffect(() => {
    async function getFighters() {
      try {
        const fetchedFighters: Fighter[] = await fetchFighters();
        setFighters(fetchedFighters);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    getFighters();
  }, []);

  const weightCategories = [
    {
      range: 'Heavyweight',
      minWeight: 37,
      maxWeight: 400,
    },
    {
      range: 'Light heavyweight',
      minWeight: 339,
      maxWeight: 372,
    },
    {
      range: 'Middleweight',
      minWeight: 308,
      maxWeight: 338,
    },
    {
      range: 'Welterweight',
      minWeight: 277,
      maxWeight: 307,
    },
    {
      range: 'Lightweight',
      minWeight: 236,
      maxWeight: 276,
    },
    {
      range: 'Featherweight',
      minWeight: 205,
      maxWeight: 235,
    },
    {
      range: 'Bantamweight',
      minWeight: 174,
      maxWeight: 204,
    },
    {
      range: 'Flyweight',
      minWeight: 0,
      maxWeight: 173,
    },
  ];

  const groupFightersByWeightClass = () => {
    const result: Record<string, Fighter[]> = {};

    weightCategories.forEach((category) => {
      const { range, minWeight, maxWeight } = category;

      result[range] = fighters
        .filter((fighter) => fighter.Weight >= minWeight && fighter.Weight < maxWeight)
        .slice(0, 15);
    });
    return result;
  };

  const groupedFighters = groupFightersByWeightClass();

  return (
    <table className={styles['fighters-table']}>
      <thead>
        <tr>
          {weightCategories.map((category) => (
            <th className={styles.th} key={category.range}>
              {category.range}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {weightCategories.map((category) => (
            <td key={category.range} className={styles.td}>
              {groupedFighters[category.range]?.map((fighter, index) => (
                <div key={fighter.FighterId} className={styles.fighter}>
                  <span>{index + 1}. </span>
                  {fighter.FirstName} {fighter.LastName}
                </div>
              ))}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Fighters;
