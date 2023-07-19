import { SectionStyleP } from './Section.styled';
import PropTypes from 'prop-types';
const Section = ({ title, children }) => {
  return (
    <section>
      <SectionStyleP>{title}</SectionStyleP>
      {children}
    </section>
  );
};

export default Section;
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
