import { Button } from '@mui/material';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center content-centers h-screen">
      <h1 className="text-5xl">Nextjs Boilerplate({process.env.STAGING_NAME})</h1>
      <div className="flex flex-row gap-2 p-4 ">
        <Button variant="contained" color="primary">
          <a href="/get-started">Get Started</a>
        </Button>
        <Button variant="contained" color="secondary">
          <a href="/documentation"> Documentation </a>
        </Button>
      </div>
    </div>
  );
}
