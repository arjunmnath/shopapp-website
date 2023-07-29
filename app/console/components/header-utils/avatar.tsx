import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar";
   

type profilePropsType = {
  src: string;
  fallback: string;
  alt: string;
}



const Profile = (props:profilePropsType) => {
  return (
    <Avatar>
      <AvatarImage src={props.src} alt={props.alt} />
      <AvatarFallback>{props.fallback}</AvatarFallback>
    </Avatar>
  );
};

export default Profile;
