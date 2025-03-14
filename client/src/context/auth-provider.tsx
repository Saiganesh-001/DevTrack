import { createContext, useContext, useEffect } from "react";
import useWorkspaceId from "@/hooks/use-workspace-id";
import useAuth from "@/hooks/api/use-auth";
import { UserType, WorkspaceType } from "@/types/api.type";
import useGetWorkspaceQuery from "@/hooks/api/use-get-workspace";
import { useNavigate } from "react-router-dom";

// Define the context shape
type AuthContextType = {
  user?: UserType;
  workspace?: WorkspaceType
  error: any;
  isLoading: boolean;
  workspaceLoading: boolean;
  isFetching: boolean;
  refetchAuth: () => void;
  refetchWorkspace: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  const navigate = useNavigate();
  const workspaceId = useWorkspaceId();

  const {
    data: authData,
    error: authError,
    isLoading,
    isFetching,
    refetch: refetchAuth,
  } = useAuth();
  const user = authData?.user;

  const {
    data: workspaceData,
    isLoading: workspaceLoading,
    error: workspaceError,
    refetch: refetchWorkspace
  } = useGetWorkspaceQuery(workspaceId);

  const workspace = workspaceData?.workspace;

  useEffect(() => {
    if(workspaceError){
      if(workspaceError.errorCode === "ACCESS_UNAUTHORIZED"){
        navigate("/");
      }
    }
  },[navigate, workspaceError])

  return (
    <AuthContext.Provider
      value={{
        user,
        workspace,
        error: authError || workspaceError,
        isFetching,
        isLoading,
        workspaceLoading,
        refetchAuth,
        refetchWorkspace,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useCurrentUserContext must be used within a AuthProvider");
  }
  return context;
};
