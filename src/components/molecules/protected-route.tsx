import { useAuth } from "../../hooks/useAuth";
import { lazy, Suspense } from "react";

// to reduce initial bundle size, access-denied is only required at specific case
const AccessDenied = lazy(() => import("../atoms/access-denied"));

const FetchingState = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="text-lg font-medium animate-pulse">
        Fetching your details...
      </div>
    </div>
  );
};

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <FetchingState />;
  }

  return user ? (
    children
  ) : (
    <div className="h-full w-full flex justify-center items-center">
      <Suspense fallback={<FetchingState />}>
        <AccessDenied />
      </Suspense>
    </div>
  );
}

export default ProtectedRoute;
