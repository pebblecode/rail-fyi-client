import { Link } from 'react-router';

const buildInProgressMessage = (station, subject, description) => {
  if (!station) {
    return <div>..</div>;
  }
  const stationLink = <Link className="btn" to="/select-station">{station}</Link>;
  if (!subject) {
    return (
      <div className="message-container">
        <span>At</span>
        {stationLink}
        <span className="ellipsis">&hellip;</span>
      </div>
    );
  }
  const subjectLink = <Link className="btn" to="/select-subject">{subject}</Link>;
  if (!description) {
    return (
      <div className="message-container">
        <span>At</span>
        {stationLink}
        <span>the</span>
        {subjectLink}
        <span>was</span>
        <span className="ellipsis">&hellip;</span>
      </div>
    );
  }
  const descriptionLink = <Link className="btn" to="/select-description">{description}</Link>;
  return (
    <div className="message-container">
      <span>At</span>
      {stationLink}
      <span>the</span>
      {subjectLink}
      <span>was</span>
      {descriptionLink}
    </div>
  );
};

const buildFinalMessageString = (station, subject, description) => {
  return 'At ' + station + ' the ' + subject + ' was ' + description;
};

export default { buildInProgressMessage, buildFinalMessageString };
