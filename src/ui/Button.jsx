function Button({ children, onClick, buttonClass }) {
  return (
    <button onClick={onClick} className={`rounded-lg px-4 py-2 ${buttonClass}`}>
      {children}
    </button>
  );
}

export default Button;
