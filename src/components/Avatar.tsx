import Image from "next/image";
import photo from "../../public/avatar_img.jpg";

const Avatar = () => {
  return (
    <Image
      src={photo}
      alt="Avatar image"
      height={100}
      width={100}
      className="rounded-full"
    />
  );
};

export default Avatar;