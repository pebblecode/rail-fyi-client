import config from '../config';

const getConfigParts = (type, configMessage) => {
  const parts = [];
  if (configMessage.pre) {
    parts.push({ type: 'plain', text: configMessage.pre });
  }
  parts.push({ type, text: configMessage.main });
  if (configMessage.post) {
    parts.push({ type: 'plain', text: configMessage.post });
  }
  return parts;
};

const buildInProgressMessageParts = (station, subject, description) => {
  const ellipsis = { type: 'ellipsis', text: '...' };

  if (!station) {
    return [ellipsis];
  }

  let parts = [
    { type: 'plain', text: 'At' },
    { type: 'station', text: station }
  ];

  if (!subject) {
    parts.push(ellipsis);
    return parts;
  }

  const subjectConfig =
    config.subjects.filter(s => s.name === subject)[0];
  parts = parts.concat(getConfigParts('subject', subjectConfig.message));

  if (!description) {
    parts.push(ellipsis);
    return parts;
  }

  const descriptionConfig =
    subjectConfig.options.filter(o => o.name === description)[0];
  parts = parts.concat(getConfigParts('description', descriptionConfig.message));

  return parts;
};

export default { buildInProgressMessageParts };
