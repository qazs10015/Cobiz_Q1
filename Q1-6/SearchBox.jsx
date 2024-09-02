let timeId = 0;
export function SearchBox() {
  const handleOnChange = (event) => {
    if (timeId) clearInterval(timeId);

    timeId = setTimeout(() => {
      console.log(event.target.value);
      // make ajax call
    }, 3000);
  };
  return <input type="search" name="p" onChange={handleOnChange} />;
}
