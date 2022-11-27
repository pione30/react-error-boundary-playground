import { FC } from "react";
import { BoomError } from "./BoomError";
import { ErrorBoundary } from "./ErrorBoundary";

export const App: FC = () => {
  return (
    <ErrorBoundary>
      <h1>Hello World!</h1>
      <ErrorBoundary>
        <BoomError />
      </ErrorBoundary>
      <div>Error Boundary Playground</div>
    </ErrorBoundary>
  );
};
