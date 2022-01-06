import styles from './styles/card.module.css';

// const cardStyle = {
//   backgroundColor: '#777',
//   marginBottom: '1em',
//   padding: '0.5em 1em',
//   borderRadius: '2em',
// }

function Card (props) {
  return (
    <div className={styles.card}>
      { JSON.stringify(styles) }
      <div>
        <h3>{props.title}</h3>
        by {props.userId}
      </div>
      <div>
        {props.completed ? 'Complete' : 'Pending'}
      </div>
    </div>
  )
}

export default Card
