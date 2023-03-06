import { useRouter } from 'next/router';

export default function BackButton() {
  const router = useRouter();

  function handleBack() {
    router.back();
  }

  return (
    <div>
      <button onClick={handleBack}>Back</button>
    </div>
  );
}