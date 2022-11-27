import { FC } from "react";

export const BoomError: FC = () => {
  throw new Error("Boom");

  return <h1>This Cannot be Shown!</h1>;
};
