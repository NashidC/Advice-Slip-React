function Advice({ advice, searchedApi }) {
  console.log(`random`, searchedApi);
  return (
    <div>
      {advice}
      {searchedApi}
    </div>
  );
}
export default Advice;