import { Link } from 'react-router';
import config from '../config';

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
  const subjectConfig =
    config.subjects.filter(s => s.name === subject)[0];
  const subjectLink =
    <Link className="btn" to="/select-subject">
      {subjectConfig.message}
    </Link>;
  if (!description) {
    return (
      <div className="message-container">
        <span>At</span>
        {stationLink}
        {subjectLink}
        <span className="ellipsis">&hellip;</span>
      </div>
    );
  }
  const descriptionConfig =
    subjectConfig.options.filter(o => o.name === description)[0];
  const descriptionLink =
    <Link className="btn" to="/select-description">
      {descriptionConfig.message}
    </Link>;
  return (
    <div className="message-container">
      <span>At</span>
      {stationLink}
      {subjectLink}
      {descriptionLink}
    </div>
  );
};

const buildFinalMessageString = (station, subject, description) => {
  return 'At ' + station + ' the ' + subject + ' was ' + description;
};

export default { buildInProgressMessage, buildFinalMessageString };
