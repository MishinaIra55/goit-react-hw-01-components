
import styles from './Statistics.module.css';

import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export default function Statistics ( { title, stats } ) {


    return (
      <section className={styles.statistics}>
        { title && <h2 className={styles.title}>{title}</h2>}


        <ul className={styles.list}>
          {
            stats.map(( { id, label, percentage} ) => {

              return (
                <li className={styles.item} key={id}
                    style={{
                      backgroundColor: getRandomHexColor(),
                    }}>
                  <span className={styles.label}>{label}</span>
                  <span className={styles.percentage}>{percentage + '%'}</span>
                </li>
              )
            })
          }
        </ul>
      </section>
    )
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf (
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number
    })
  )
}


