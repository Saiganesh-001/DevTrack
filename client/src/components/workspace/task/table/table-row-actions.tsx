import { useState } from "react";
import { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ConfirmDialog } from "@/components/resuable/confirm-dialog";
import { TaskType } from "@/types/api.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useWorkspaceId from "@/hooks/use-workspace-id";
import { deleteTaskMutationFn, markTaskAsDoneMutationFn } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

interface DataTableRowActionsProps {
  row: Row<TaskType>;
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
  const [openDeleteDialog, setOpenDialog] = useState(false);
  const [openMarkCompleteDialog, setOpenMarkCompleteDialog] = useState(false);
  const queryClient = useQueryClient();
  const workspaceId = useWorkspaceId();

  const { mutate: deleteTask, isPending: isDeleting } = useMutation({
    mutationFn: deleteTaskMutationFn,
  });

  const { mutate: markAsDone, isPending: isMarking } = useMutation({
    mutationFn: markTaskAsDoneMutationFn,
  });

  const taskId = row.original._id as string;
  const taskCode = row.original.taskCode;

  const handleDeleteConfirm = () => {
    deleteTask(
      { workspaceId, taskId },
      {
        onSuccess: (data) => {
          queryClient.invalidateQueries({ queryKey: ["all-tasks", workspaceId] });
          toast({ title: "Success", description: data.message, variant: "success" });
          setTimeout(() => setOpenDialog(false), 100);
        },
        onError: (error) => {
          toast({ title: "Error", description: error.message, variant: "destructive" });
        },
      }
    );
  };

  const handleConfirm = () => {
    markAsDone(
      { workspaceId, taskId },
      {
        onSuccess: (data) => {
          queryClient.invalidateQueries({ queryKey: ["all-tasks", workspaceId] });
          toast({ title: "Task Completed", description: data.message, variant: "success" });
          setTimeout(() => setOpenMarkCompleteDialog(false), 100);
        },
        onError: (error) => {
          toast({ title: "Error", description: error.message, variant: "destructive" });
        },
      }
    );
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <MoreHorizontal />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem 
            className="cursor-pointer"
            onClick={() => setOpenMarkCompleteDialog(true)}
          >
            Mark as Done
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className={`!text-destructive cursor-pointer ${taskId}`}
            onClick={() => setOpenDialog(true)}
          >
            Delete Task
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ConfirmDialog
        isOpen={openDeleteDialog}
        isLoading={isDeleting}
        onClose={() => setOpenDialog(false)}
        onConfirm={handleDeleteConfirm}
        title="Delete Task"
        description={`Are you sure you want to delete ${taskCode}`}
        confirmText="Delete"
        cancelText="Cancel"
      />

      {/* Mark as Done Dialog */}
      <ConfirmDialog
        isOpen={openMarkCompleteDialog}
        isLoading={isMarking}
        onClose={() => setOpenMarkCompleteDialog(false)}
        onConfirm={handleConfirm}
        title="Mark as Done"
        description={`Are you sure you want to mark ${taskCode} as done?`}
        confirmText="Done"
        cancelText="Cancel"
      />
    </>
  );
}
