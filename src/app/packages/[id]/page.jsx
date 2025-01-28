import PackageDetails from "./PackageDetails";

export async function generateStaticParams() {
  const packageIds = [1, 2, 3, 4]; // Replace with a fetch to your backend or API
  return packageIds.map((id) => ({
    id: id.toString(),
  }));
}

export default function Page({ params }) {
  const { id } = params; // Server-provided params
  return <PackageDetails id={id} />;
}
