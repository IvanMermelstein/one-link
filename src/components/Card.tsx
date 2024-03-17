import Titles from './Titles';
import Avatar from './Avatar';
import Button from './Button';

const Card = () => {
  return (
    <div
      className="bg-slate-700 rounded-lg w-full max-w-96 flex flex-col items-center text-center min-h-28
       p-5 md:p-10 justify-center gap-y-4">
      <Avatar />
      <Titles />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
};

export default Card;