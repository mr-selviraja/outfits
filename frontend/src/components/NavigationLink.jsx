import React from 'react';

// Method to return a string of classes from an array of classes
const getClassList = (classes) => {
  let classList = '';
  classes && classes.forEach((cls) => (classList += cls + ' '));

  return classList;
};

const NavigationLink = ({ navText, classes }) => {
  return (
    <li>
      <a href='#' className={getClassList(classes)}>
        {navText}
      </a>
    </li>
  );
};

export default NavigationLink;
