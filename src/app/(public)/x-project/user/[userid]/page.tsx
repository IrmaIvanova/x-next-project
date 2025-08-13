

import type { Metadata } from "next";
import ClientProfile from "./UserProfile";


export const metadata: Metadata = {
  title: "profileFake"
}

export default function ProfilePage() {

  return <ClientProfile />;
}