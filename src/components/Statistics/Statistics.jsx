
import styles from './Statistics.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export default function Statistics (props) {
  const { title, stats } = props;

    return (
      <section className={styles.statistics}>
        <h2 className={styles.title}>{title}</h2>

        <ul className={styles.list}>
          {
            stats.map((stat) => {
              return (
                <li className={styles.item} key={stat.id}
                    style={{
                      backgroundColor: getRandomHexColor(),
                    }}>
                  <span className={styles.label}>{stat.label}</span>
                  <span className={styles.percentage}>{stat.percentage + '%'}</span>
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
  stats: PropTypes.array
}


