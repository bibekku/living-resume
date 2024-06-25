import BulletListItem from './BulletListItem';
import education from '../data/education.json';
import SectionHeader from './SectionHeader';

const EducationSection = () => {
    return (
        <div className='section'>
            <SectionHeader headerText='Education'/>
            {
                education.map(school => 
                <BulletListItem
                    boldLeft={school.school}
                    regularRight={school.location}
                    italicLeft={school.degree}
                    italicRight={school.time_period}
                />)
            }
        </div>
      );
};

export default EducationSection;
