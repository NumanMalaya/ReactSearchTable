import { ReactNode } from "react";
interface Props{
    children:ReactNode;
}

export default function ProductHeading({children}:Props) {
  return (
    <>
      <tr>
        <th scope="col" colSpan={2}>{children}</th>
      </tr>
    </>
  );
}
