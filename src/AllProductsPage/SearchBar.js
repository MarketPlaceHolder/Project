export default ({ input, setInput }) => {
  const onchange = (event) => {
    setInput(event.target.value);
  };
  return <input type="text" onChange={onchange}></input>;
};
