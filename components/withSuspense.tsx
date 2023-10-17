import React, { Suspense, ReactElement } from "react";

type WithSuspenseProps = {
  SkeletonComponent: ReactElement;
};

const WithSuspense = <P extends Record<string, unknown>>(
  Component: React.ComponentType<P>,
  { SkeletonComponent }: WithSuspenseProps,
) => {
  const WithSuspense = (props: P) => (
    <Suspense fallback={SkeletonComponent}>
      <Component {...props} />
    </Suspense>
  );

  WithSuspense.displayName = `WithSuspense(${
    Component.displayName || Component.name || "Component"
  })`;

  return WithSuspense;
};

export default WithSuspense;
