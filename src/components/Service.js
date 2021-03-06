import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Service.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Service = ({
  image,
  alt,
  title,
  text,
  spanishText,
  subtext,
  service1,
  service1Text,
  service2,
  service2Text,
  service3,
  service3Text,
  service4,
  service4Text,
  service5,
  service5Text,
}) => {
  return (
    <div className={styles.service}>
      <div className={styles.serviceContent}>
        <img className={styles.image} src={image} alt={alt} />
        <div className={styles.serviceText}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
          <p className={styles.spanishText}>{spanishText}</p>
          <div className={styles.subtext}>
            {subtext}
            <ul className={styles.list}>
              <li>
                <strong>{service1}</strong> {service1Text}
              </li>
              <li>
                <strong>{service2}</strong> {service2Text}
              </li>
              <li>
                <strong>{service3}</strong> {service3Text}
              </li>
              <li>
                <strong>{service4}</strong> {service4Text}
              </li>
              <li>
                <strong>{service5}</strong> {service5Text}
              </li>
            </ul>
            <a
              className={classNames('button', styles.btn)}
              href="tel: +17148377489"
            >
              Call Today! Hablamos Español{' '}
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
