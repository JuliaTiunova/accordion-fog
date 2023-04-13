export default function MysticAccordionTitle(props) {
  return (
    <h2 className={`mystic-accordion-title`}>
      {props.title || props.children || 'Mystic accordion title'}
    </h2>
  );
}
