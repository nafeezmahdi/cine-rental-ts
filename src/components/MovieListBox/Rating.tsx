import StarLogo from "../../assets/star.svg";

interface RatingProps {
  value: number;
}

export default function Rating({ value }: RatingProps) {
  const stars = Array(value).fill(StarLogo);

  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={star} width="14" height="14" alt="" />
      ))}
    </>
  );
}
