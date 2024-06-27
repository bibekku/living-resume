import BulletListItem from './BulletListItem';
import experience from '../data/experience.json';
import SectionHeader from './SectionHeader';
import SubBulletListItem from './SubBulletListItem';

const EducationSection = () => {
    return (
        <div className='section'>
            <SectionHeader headerText='Experience'/>
            {
                experience.map(exp => {
                    let elems = [];
                    elems.push(<BulletListItem
                        boldLeft={exp.company}
                        regularRight={exp.company_location}
                        italicLeft={exp.role}
                        italicRight={exp.time_duration} />);

                    for (let detail of exp.details) {
                        elems.push(<SubBulletListItem
                            bulletType="empty-bullet"
                            title={detail.title}
                            content={detail.description} />);
                    }

                    return <div className="experience-item-container">{elems}</div>;
                })
            }
        </div>
      );
};

export default EducationSection;
