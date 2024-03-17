import Card from "@/components/Card";

async function getUser() {
  const res = await fetch('http://localhost:3000/api/getLinkData', {
    method: 'GET',
    body: JSON.stringify({ id: '65f75c9f255dd7df1e99dd03' })
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Home = async () => {
  const user: User = await getUser();

  return (
    <main className="pt-10 px-10 md:pt-15 flex justify-center">
      <Card user={user} />
    </main>
  );
};

export default Home;