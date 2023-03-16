const CategoryHead: React.FC<{ title: string }> = ({ title }) => {
  return (
    <section className="category-head">
      <h2 className="category-head__title">{title}</h2>
    </section>
  );
};

export default CategoryHead;
