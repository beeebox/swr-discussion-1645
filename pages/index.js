import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data } = useSWR(
    "https://worldtimeapi.org/api/timezone/America/New_York",
    fetcher
  );
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
