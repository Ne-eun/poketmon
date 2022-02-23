import style from "./Card.module.scss";

function Card({ name, srcUrl, onClick }) {
  return (
    <div className={style.card} onClick={onClick}>
      <img src={srcUrl} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default Card;
