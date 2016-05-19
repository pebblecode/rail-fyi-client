import { Link } from 'react-router';

const buildInProgressMessage = (station, subject, description) => {
  if (!station) {
    return <div>..</div>;
  }
  const stationLink = <Link to="/select-station">{station}</Link>;
  if (!subject) {
    return (
      <div>
        In {stationLink}..
      </div>
    );
  }
  const subjectLink = <Link to="/select-subject">{subject}</Link>;
  if (!description) {
    return (
      <div>
        In {stationLink} the {subjectLink} was..
      </div>
    );
  }
  const descriptionLink = <Link to="/select-description">{description}</Link>;
  return (
    <div>
      In {stationLink} the {subjectLink} was {descriptionLink}
    </div>
  );
};

const buildFinalMessageString = (station, subject, description) => {
  return 'In ' + station + ' the ' + subject + ' was ' + description;
};

export default { buildInProgressMessage, buildFinalMessageString };
