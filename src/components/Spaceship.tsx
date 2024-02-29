interface SpaceshipProps {
    name: string,
    speed: number,
    weapon: string
    shield: number
    energy: number
    image: string
}

const Spaceship = (props: SpaceshipProps) => {
  return (
    <div>
        <h3>{props.name}</h3>
        <img src={props.image} alt={props.name} />
        <p>Speed: {props.speed}</p>
        <p>Weapon: {props.weapon}</p>
        <p>Shield: {props.shield}</p>
        <p>Energy: {props.energy}</p>
    </div>
  )
}

export default Spaceship