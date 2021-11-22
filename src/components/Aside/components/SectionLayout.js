import "./SectionLayout.css";
const SectionLayout = ({ sectionTitle, children }) => {
  return (
    <section className="titles edit-section-mg">
      <h4>{sectionTitle}</h4>
      {children}
    </section>
  );
};

export default SectionLayout;
