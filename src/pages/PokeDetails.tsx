import React, { PropsWithChildren, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

import { fetch } from '../utils/fetch';
import { firstCharUpperCase } from '../utils/firstCharUpperCase';

const PokeDetails: React.FC = () => {
  const [data, setData] = useState<any>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();

  const loadDetails = async () => {
    await setIsLoading(true);
    const load = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    await setData(load);
    await setIsLoading(false);
    console.log('details page data ==>', data);
  };

  useEffect(() => { loadDetails() }, []);

  return isLoading ? <Loading /> : (
    <>
    <h1>{firstCharUpperCase(data.name)}</h1>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" />
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`} alt="" />

      {/* sprites - back */}
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`} alt="" />
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${id}.png`} alt="" />

      <br />

      <h2>Status</h2>
      <br />
      {data.stats.map((stat: any, i: number) => {
        const newName = firstCharUpperCase(stat.stat.name);
        return (
          <>
            <span key={i}>{`${newName}: `}</span>
            <span key={i}>{`${stat.base_stat} + Effort: ${stat.effort}`}</span>
            <br />
          </>
        );
      })}
      <span>{`Height: ${data.height}`}</span>
      <br />
      <span>{`Weight: ${data.weight}`}</span>
      <br />
      <span>{`Base experience: ${data.base_experience}`}</span>
      <br />

      <br />

      <h2>Abilities</h2>
      <br />
      {data.abilities.map((abilit: any, i: number) => {
        const newAbility = abilit.ability.is_hidden ? 'Yes' : 'No';
        return (
          <>
            <span>{`Name: ${firstCharUpperCase(abilit.ability.name)}`}</span>
            <br />
            <span>{`Hidden: ${newAbility}`}</span>
            <br />
            <span>{`Slot: ${abilit.slot}`}</span>
            <br />

            <br />
          </>
        );
      })}

      <br />
      <br />

      <h2>Moves</h2>
      <br />
      <br />
      {data.moves.map((mov: any, i: number) => {
        const newName = firstCharUpperCase(mov.move.name);
        const mapVersionGroup = mov.version_group_details
          .map((method: any, i: number) => {
            const newM = firstCharUpperCase(method.move_learn_method.name);
            const newV = firstCharUpperCase(method.version_group.name);
            return (
              <>
                <span>{`Move learn method: ${newM}`}</span>
                <br />
                <span>{`Version group: ${newV}`}</span>
                <br />
                <span>{`Level learned at: ${method.level_learned_at}`}</span>
                <br />
                <br />
              </>

            );
          });
        return (
          <>
            <h3>{`${newName}`}</h3>
            <br />
            <h4>Version group Details</h4>
            <br />
            {mapVersionGroup}
            <br />
          </>
        );
      })}
    </>
  );
};

export default PokeDetails;
