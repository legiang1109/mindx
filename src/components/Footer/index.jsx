const Footer = ({ countTodo }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-2xl">{countTodo ?? 0} Tasks</div>
      <div className="text-2xl">Todo app</div>
    </div>
  );
};

export default Footer;
