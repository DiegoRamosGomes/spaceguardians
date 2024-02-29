interface SpaceMonsterProps {
    life: number
    speed: number
    damage: number
    type: string
    reward: number
    specialAbility: string
    image: string
}

const SpaceMonster = (props: SpaceMonsterProps) => {
  return (
    <div>
        <h3>Space Monster - {props.type}</h3>
        <img src="image" alt={`Image of ${props.type}`} />
        <p>Life: {props.life}</p>
        <p>Speed: {props.speed}</p>
        <p>Damage: {props.damage}</p>
        <p>Special Ability: {props.specialAbility}</p>
    </div>
  )
}

export default SpaceMonster