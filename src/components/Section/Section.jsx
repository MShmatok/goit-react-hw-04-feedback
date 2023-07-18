import { SectionStyleP } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <section>
      <SectionStyleP>{title}</SectionStyleP>
      {children}
    </section>
  );
};

export default Section;
