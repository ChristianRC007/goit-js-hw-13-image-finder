import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const { error } = require('@pnotify/core');

const cautionNotify = () => {
  const options = {
    text: 'Something went wrong. Please try again later.',
    delay: 3000,
  };
  error(options);
};

export default cautionNotify;
