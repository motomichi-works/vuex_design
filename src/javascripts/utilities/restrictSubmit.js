export default function restrictSubmit (event) {
  const isEnterKey = event.keyCode === 13;
  const tagList = [
    'INPUT',
  ];
  const isWillPrevent = tagList.includes(event.target.tagName) && isEnterKey;

  if (isWillPrevent) {
    event.preventDefault();
  }
};
