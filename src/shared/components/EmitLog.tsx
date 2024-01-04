interface EmitLogProps {
  name: string;
  payload?: any;
}

export const EmitLog = ({ name, payload }: EmitLogProps) => {
  console.log(`lyticsdev ::: ${name} ::`, payload);
};
