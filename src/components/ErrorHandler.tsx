interface Props {
  error: Error;
  resetErrorBoundary: () => void;
}

export default function ErrorHandler({ error, resetErrorBoundary }: Props) {
  const handleClickReset = () => {
    resetErrorBoundary();
  };

  return (
    <div>
      Tentar novamente
    </div>
  );
}
