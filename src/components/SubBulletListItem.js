const SubBulletListItem = ({ bulletType, title, content }) => {
  return (
    <div className="sub-bullet-list-item">
        <div className={bulletType}></div>
        <div className="text-container">
            <div>
                <span className="bold-left">{title}</span>:&nbsp;{content}
            </div>
        </div>
    </div>
  );
};

export default SubBulletListItem;