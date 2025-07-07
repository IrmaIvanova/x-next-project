

import type { Metadata } from "next";
import UserProfile from "./UserProfile";


export const metadata: Metadata = {
  title: "profileFake"
}

export default function Profile_fake() {

  return <UserProfile />;
}