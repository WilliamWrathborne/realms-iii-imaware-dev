import PreLoader from "@/components/Preloader";
import System from "@/models/system";
import { useEffect, useState } from "react";

export default function VectorCount({ reload, workspace }) {
  const [totalVectors, setTotalVectors] = useState(null);

  useEffect(() => {
    async function fetchVectorCount() {
      const totalVectors = await System.totalIndexes(workspace.slug);
      setTotalVectors(totalVectors);
    }
    fetchVectorCount();
  }, [workspace?.slug, reload]);

  if (totalVectors === null)
    return (
      <div>
        <h3 className="input-label">Number of vectors</h3>
        <p className="text-typography-700 text-opacity-60 text-xs font-medium py-1">
          Total number of vectors in your vector database.
        </p>
        <p className="text-typography-700 text-opacity-60 text-sm font-medium">
          <PreLoader size="4" />
        </p>
      </div>
    );
  return (
    <div>
      <h3 className="input-label">Number of vectors</h3>
      <p className="text-typography-700 text-opacity-60 text-xs font-medium py-1">
        Total number of vectors in your vector database.
      </p>
      <p className="text-typography-700 text-opacity-60 text-sm font-medium">
        {totalVectors}
      </p>
    </div>
  );
}
