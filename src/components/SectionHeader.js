const SectionHeader = ({ headerText }) => {
    return (
        <div>
            <div className="section-header-container">
                <span className="section-header">{headerText}</span>
            </div>
        </div>
    );
};

export default SectionHeader;
