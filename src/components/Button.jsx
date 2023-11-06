function Button({ children, onClick, buttonClass }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-6 py-2 ${buttonClass}`}
    >
      {children}
    </button>
  );
}

export default Button;
