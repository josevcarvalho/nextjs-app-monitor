export default async function CustomerPage({ params }) {
  const { id } = await params;
  return <div className="m-2">Customer Page: {id}</div>;
}
