interface HeartProps {
  type: "full" | "half" | "empty"
  life: number
}

export function Heart({ type }: HeartProps) {
  let imagePath = ""

  switch (type) {
    case "full":
      imagePath = "src/assets/fullHeart.svg"
      break
    case "half":
      imagePath = "src/assets/halfHeart.svg"
      break
    case "empty":
      imagePath = "src/assets/emptyHeart.svg"
      break
    default:
      imagePath = "src/assets/fullHeart.svg"
      break
  }

  return <img src={imagePath} alt={`Heart ${type}`} />;
}
