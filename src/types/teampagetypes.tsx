export interface MemberProps {
  profileUrl?: string;
  name: string;
  email: string;
  onClick: () => void;
}

export type ProgressProp = {
  percentage: number;
};

export interface UrgentTaskProps {
  title: string;
  dueDate: string;
}
