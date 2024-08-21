export interface JobsProps {
  id: number;
  title: string;
  description: string;
  sponsor: string;
  eta: number;
  tasks: TaskProps[];
  dueDate: Date;
}

export interface TaskProps {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
  eta: number;
}