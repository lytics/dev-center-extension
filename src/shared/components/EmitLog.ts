interface EmitLogProps {
  name: string;
  payload?: any;
}

export const EmitLog = ({ name, payload }: EmitLogProps) => {
  if (name === 'storage') return;
  console.log(`lyticsdev ::: ${name} ::`, payload);
};
