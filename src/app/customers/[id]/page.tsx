export const dynamicParams = false;

// Provide a static list of params for static export.
// Update this list with real customer IDs you want pre-rendered.
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
  ]
}

export default function CustomerPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return <div className="m-2">Customer Page: {id}</div>;
}
