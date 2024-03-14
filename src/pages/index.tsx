import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import Item from "@/components/item";
import { type TItem } from "@/types/item";
import { client, urlFor } from "@/utils/sanity-client";

export default function Home() {
  const [items, setItems] = useState<TItem[]>([]);

  useEffect(() => {
    client.fetch('*[_type == "item"]').then((res) => {
      console.log(res as TItem[]);
      setItems(res);
    });
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((i) => (
          <Item {...i} image={urlFor(i.image)} />
        ))}
      </div>
    </Layout>
  );
}
