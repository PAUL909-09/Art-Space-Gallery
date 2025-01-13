import ViewExhibit from "../../pages/userPage/viewExhibits";

export default function ExhibitPage({ params }: { params: { id: string } }) {
  return <ViewExhibit id={params.id} />;
} 