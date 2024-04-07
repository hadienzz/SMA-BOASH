const Button = ({ children, w, h }) => {
  const buttonStyle = {
    width: w,
    height: h
  };

  console.log(buttonStyle)

  return (
    <button
      className="bg-[#BAD94F] rounded-[35px] text-darkGreen text-[25px] font-bold cursor-pointer"
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

export default Button