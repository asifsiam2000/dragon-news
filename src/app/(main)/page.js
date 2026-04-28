import { redirect } from "next/navigation";



const id = "01";

export default async function Home () {

  redirect(`/category/${id}`);

}
