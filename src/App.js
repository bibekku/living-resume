import './App.css';
import EducationSection from './components/EducationSection';
import SubBulletListItem from './components/SubBulletListItem';

const App = () => {
  return (
    <>
      <EducationSection />
      <SubBulletListItem bulletType="empty-bullet" title="hi i'm a title" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc libero, lacinia ac dui at, molestie volutpat ante. Quisque dictum magna in congue sodales. Proin eget maximus enim. Vestibulum sed malesuada ante. Pellentesque egestas in erat non pellentesque. Quisque et molestie metus, vel placerat orci. Ut maximus sollicitudin imperdiet. Integer tellus urna, posuere a mi et, consequat lacinia massa. Phasellus sodales, erat a condimentum elementum, tortor sem mattis risus, et aliquam eros lorem in purus. Phasellus et metus iaculis, dignissim mi non, interdum neque. Sed ultricies blandit congue. Nunc sodales iaculis volutpat. Ut vel ligula at sem aliquet auctor eu at dui. In tincidunt, dui at iaculis tristique, ante metus vehicula felis, in molestie felis mi nec neque. Suspendisse nec viverra mi, volutpat iaculis sem. Aenean fermentum ante in elit ultrices, at sagittis arcu molestie." />
    </>
  );
};

export default App;
