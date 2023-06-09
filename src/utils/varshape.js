import PropTypes from 'prop-types';

const authUserShape = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
};

const threadItemShape = {
  authUser: PropTypes.string,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.shape(authUserShape).isRequired,
};

const commenShape = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.shape(authUserShape).isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const leaderboardShape = {
  score: PropTypes.number.isRequired,
  user: PropTypes.shape(authUserShape).isRequired,
};

export default {
  authUserShape, threadItemShape, commenShape, leaderboardShape
};
