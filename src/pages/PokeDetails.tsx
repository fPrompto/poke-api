import React, { PropsWithChildren, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

import { Heading } from '@chakra-ui/react'

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
      <Heading as='h1' size='4xl'>{firstCharUpperCase(data.name)}</Heading>

      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" />
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`} alt="" />

      {/* sprites - back */}
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`} alt="" />
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${id}.png`} alt="" />

      <br />

      <div className='status'>
        <Heading as='h2' size='3xl'>Status</Heading>
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
      </div>

      <div className='abilities'>
        <Heading as='h2' size='3xl'>Abilities</Heading>
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
            </>
          );
        })}
      </div>

      <div className='moves'>
        <Heading as='h2' size='3xl'>Moves</Heading>
        <br />
        {data.moves.map((mov: any, i: number) => {
          const newName = firstCharUpperCase(mov.move.name);
          const mapVersionGroup = mov.version_group_details
            .map((method: any, i: number) => {
              const newM = firstCharUpperCase(method.move_learn_method.name);
              const newV = firstCharUpperCase(method.version_group.name);
              return (
                <div className='move-name'>
                  <span>{`Move learn method: ${newM}`}</span>
                  <br />
                  <span>{`Version group: ${newV}`}</span>
                  <br />
                  <span>{`Level learned at: ${method.level_learned_at}`}</span>
                  <br />
                  <br />
                </div>

              );
            });
          return (
            <div className='move-version-group'>
              <Heading as='h3' size='lg'>{`${newName}`}</Heading>
              <br />
              <Heading as='h4' size='md'>Version group Details</Heading>
              <br />
              {mapVersionGroup}
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PokeDetails;
