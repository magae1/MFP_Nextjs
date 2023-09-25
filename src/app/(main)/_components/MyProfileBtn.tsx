import Link from "next/link";
import { Avatar, ButtonBase } from "@mui/material";

import { TProfile } from "@/app/_libs/types";
import Image from "next/image";

interface props {
  data: TProfile;
}

const MyProfileBtn = ({ data }: props) => {
  const { avatar } = data;

  return (
    <ButtonBase
      sx={{ borderRadius: "100%" }}
      id="avatar-button"
      component={Link}
      href={"/account"}
    >
      <Avatar>
        {avatar && (
          <Image src={avatar} alt={"내 아바타"} width={40} height={40} />
        )}
      </Avatar>
    </ButtonBase>
  );
};

export default MyProfileBtn;
