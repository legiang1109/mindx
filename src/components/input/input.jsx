function Input({ onChangeInput, value }) {
  return (
    <input
      type="text"
      placeholder="Enter your task here..."
      className="h-[40px] px-2 w-full border-b-2 border-neutral-950 outline-0"
      value={value}
      onChange={(e) => {
        onChangeInput(e.target.value);
      }}
    />
  );
}

export default Input;
