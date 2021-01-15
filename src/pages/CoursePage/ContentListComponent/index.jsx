import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ContentListComponent = ({ modules }) => {
  return (
    <>
      <section id="modules">
        {modules.map((module, index) => (
          <p key={index}>
            <strong>
              Módulo
              <> </>
              {index + 1}
              <>. </>
            </strong>
            {module}
          </p>
        ))}
      </section>
    </>
  );
};

ContentListComponent.propTypes = {
  modules: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default ContentListComponent;
