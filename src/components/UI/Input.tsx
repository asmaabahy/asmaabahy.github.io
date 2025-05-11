function Input({ type, ...props }) {
  if (type === "textarea") {
    return (
      <textarea
        {...props}
        className="w-80 md:w-96 bg-neutral-700 rounded-lg px-3 py-3"
      />
    );
  } else {
    return (
      <input
        type={type}
        {...props}
        className="w-80 md:w-96 bg-neutral-700 rounded-lg px-3 py-3"
      />
    );
  }
}

export default Input;
