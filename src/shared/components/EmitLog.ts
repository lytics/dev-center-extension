interface EmitLogProps {
  name: string;
  payload?: any;
}

export const EmitLog = ({ name, payload }: EmitLogProps) => {
  return;
  if (name === 'storage') return;
  console.log(`lyticsdev ::: ${name} ::`, payload);
};
