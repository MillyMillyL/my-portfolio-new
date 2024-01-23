function Button({ children, onClick, buttonClass }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg bg-gray-200 px-4 py-2 ${buttonClass}`}
    >
      {children}
    </button>
  );
}

export default Button;
