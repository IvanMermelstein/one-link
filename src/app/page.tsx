import Card from "@/components/Card";

async function getUser(id: string) {
  const res = await fetch(`http://localhost:3000/api/link-data?id=${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Home = async () => {
  const id = '65f75c9f255dd7df1e99dd03';
  const user: User = await getUser(id);
  console.log(user);

  return (
    <main className="pt-10 px-10 md:pt-15 flex justify-center">
      <Card user={user} />
    </main>
  );
};

export default Home;